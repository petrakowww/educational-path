/**
 * otp controller
 */

import { factories } from "@strapi/strapi";
import { randomInt } from "crypto";
import { addMinutes, isAfter } from "date-fns";
import { Totp } from "time2fa";
import utils from "@strapi/utils";

const { ValidationError, ApplicationError } = utils.errors;

const otpConfig = strapi.config.get("otp");

const sanitizeUser = (user, ctx) => {
    const { auth } = ctx.state;
    const userSchema = strapi.getModel("plugin::users-permissions.user");

    return strapi.contentAPI.sanitize.output(user, userSchema, { auth });
};

export default factories.createCoreController("api::otp.otp", ({ strapi }) => ({
    async register(ctx, next) {
        await strapi.controllers["plugin::users-permissions.auth"].register(
            ctx,
            next
        );

        ctx.send({ success: true });
    },

    async login(ctx, next) {
        const provider = ctx.params.provider || "local";

        await strapi.controllers["plugin::users-permissions.auth"].callback(
            ctx,
            next
        );

        if (provider === "local" || provider === "email") {
            try {
                const { email } = ctx.request.body;

                const lastOtp = await strapi.db.query("api::otp.otp").findOne({
                    where: { user: { email } },
                    orderBy: { createdAt: "desc" },
                });

                const now = new Date();
                if (lastOtp && isAfter(addMinutes(lastOtp.createdAt, 1), now)) {
                    throw new ValidationError("OTP already sent. Please wait.");
                }

                const user = await strapi.db
                    .query("plugin::users-permissions.user")
                    .findOne({ where: { email } });

                if (!user) {
                    throw new ValidationError("User not found");
                }

                const expiresAt = addMinutes(now, otpConfig.expiration);
                const code = randomInt(1000000)
                    .toString()
                    .padStart(otpConfig.codeLength, "0");

                await strapi.db.query("api::otp.otp").create({
                    data: {
                        code,
                        expiresAt,
                        user: user.id,
                        createdAt: now,
                    },
                });

                await strapi
                    .plugin("email")
                    .service("email")
                    .send({
                        to: user.email,
                        from: "noreply@example.com",
                        subject: "Login OTP",
                        text: `Your login OTP is: ${code}`,
                    });

                const isTotpEnabled = user.enableTotp && user.totpSecret;
                ctx.send({
                    email: user.email,
                    verifyType: isTotpEnabled ? "totp" : "otp",
                });
            } catch (err) {
                ctx.body = err;
            }
        }
    },

    async verifyCode(ctx) {
        const { code, email } = ctx.request.body;

        const user = await strapi.db
            .query("plugin::users-permissions.user")
            .findOne({ where: { email } });
        if (!user) throw new ValidationError("Code verification failed");

        const now = new Date();
        const failedAttempts = await strapi.db
            .query("api::otp.failedAttempts")
            .findOne({
                where: { user: user.id },
            });

        if (failedAttempts) {
            const firstAttemptTime =
                failedAttempts.updatedAt || failedAttempts.createdAt;
            if (isAfter(now, addMinutes(firstAttemptTime, 15))) {
                await strapi.db.query("api::otp.failedAttempts").delete({
                    where: { id: failedAttempts.id },
                });
            } else if (failedAttempts.count >= 5) {
                throw new ValidationError(
                    "Too many failed attempts. Try again after 15 minutes."
                );
            }
        }

        let isValid = false;
        if (user.enableTotp && user.totpSecret) {
            isValid = Totp.validate({
                passcode: code,
                secret: user.totpSecret,
            });
        } else {
            isValid = await strapi
                .service("api::otp.otp")
                .verifyOtp(email, code);
        }

        if (!isValid) {
            if (failedAttempts) {
                await strapi.db.query("api::otp.failedAttempts").update({
                    where: { id: failedAttempts.id },
                    data: { count: failedAttempts.count + 1 },
                });
            } else {
                await strapi.db.query("api::otp.failedAttempts").create({
                    data: { user: user.id, count: 1 },
                });
            }
            throw new ValidationError("Code verification failed");
        }

        if (failedAttempts) {
            await strapi.db.query("api::otp.failedAttempts").delete({
                where: { id: failedAttempts.id },
            });
        }

        const userDto = await sanitizeUser(user, ctx);

        ctx.send({
            jwt: strapi.plugins["users-permissions"].services.jwt.issue({
                id: userDto.id,
            }),
            user: await sanitizeUser(userDto, ctx),
        });
    },

    async generateTotpSecret(ctx) {
        if (!ctx.state.user) {
            throw new ApplicationError(
                "You must be authenticated to setup Authentication App"
            );
        }

        const data = Totp.generateKey({
            issuer: "StrapiOtp",
            user: ctx.state.user.email,
        });

        ctx.send({ email: data.user, secret: data.secret, url: data.url });
    },

    async saveTotpSecret(ctx) {
        if (!ctx.state.user) {
            throw new ApplicationError(
                "You must be authenticated to setup Authentication App"
            );
        }

        const { secret, code } = ctx.request.body;
        const success = Totp.validate({ passcode: code, secret });

        if (!success) {
            throw new ValidationError("Secret and code validation failed");
        }

        await strapi.plugins["users-permissions"].services.user.edit(
            ctx.state.user.id,
            {
                totpSecret: secret,
                enableTotp: true,
            }
        );

        ctx.send({ success });
    },

    async totpEnabled(ctx) {
        const user = await strapi
            .documents("plugin::users-permissions.user")
            .findOne({ documentId: ctx.state.user.documentId });

        const enabled = user.enableTotp && user.totpSecret;

        ctx.send({ enabled });
    },
}));
