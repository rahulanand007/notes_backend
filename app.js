const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
const dotenv = require("dotenv");
dotenv.config();

// Rate Limiting
const limiter = rateLimit({
  windowMs: process.env.RATE_LIMITING_MINUTES, // 15 minutes
  max: process.env.MAX_HITS_IN_LIMITED_MINUTES, 
  message: "Too many requests from this IP, please try again later",
});

app.use(limiter);

// Request Throttling
const speedLimiter = slowDown({
  windowMs: process.env.REQUEST_THROTTLING_MINUTES, // 15 minutes
  delayAfter: process.env.DELAY_AFTER_HITS, 
  delayMs: () => process.env.DELAY_MILISECS, 
});
app.use(speedLimiter);

//Route imports
const user = require("./routes/userRoute");
const notes = require("./routes/notesRoute");

app.use("/api", user);
app.use("/api", notes);

module.exports = app;
