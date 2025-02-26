module.exports = {
    "*/10 * * * *": async () => {
        const now = new Date();
        try {
            await strapi.db.query("api::otp.otp").deleteMany({
                where: { expiresAt: { $lt: now } },
            });
            strapi.log.info("Cleaned up expired OTPs");
        } catch (error) {
            strapi.log.error("Error cleaning up OTPs:", error);
        }
    },
};
