const rateLimit = require("express-rate-limit");

const maxRequestsPerMinute = 40;
const maxRequestsPerHour = 100;

const limiterMinutes = rateLimit({
  windowMs: 60 * 1000,
  max: maxRequestsPerMinute,
  message: "You have exceeded the minute rate limit. Please try again later.",
});

const limiterHours = rateLimit({
  windowMs: 60 * 1000 * 60,
  max: maxRequestsPerHour,
  message: "You have exceeded the hour rate limit. Please try again later.",
});

module.exports = { limiterMinutes, limiterHours };