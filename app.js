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
dotenv.config({ path: "./env" });

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, 
  message: "Too many requests from this IP, please try again later",
});

app.use(limiter);

// Request Throttling
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 20, 
  delayMs: () => 500, 
});

app.use(speedLimiter);

//Route imports
const user = require("./routes/userRoute");
const notes = require("./routes/notesRoute");

app.use("/api", user);
app.use("/api", notes);

module.exports = app;
