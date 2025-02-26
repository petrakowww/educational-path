module.exports = ({ env }) => ({
    expiration: env.int("OTP_EXPIRATION", 5),
    codeLength: env.int("OTP_CODE_LENGTH", 6),
});
