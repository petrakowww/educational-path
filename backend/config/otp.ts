module.exports = ({ env }) => ({
    expiration: env.int("OTP_EXPIRATION", 5),
    codeLength: env.int("OTP_CODE_LENGTH", 6),
    resetCounter: env.int("OTP_RESET_COUNTER", 15),
    maxRepeats: env.int("OTP_MAX_REPEATS", 5),
});
