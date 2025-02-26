export default ({ env }) => ({
    email: {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: env("HOST"),
                port: env("NODEMAILER_PORT"),
                ignoreTLS: true,
            },
        },
    },
});
