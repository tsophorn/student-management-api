const config = {
  jwt: {
    access: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    },
    refresh: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    },
  },
}
module.exports = {
  config,
};
