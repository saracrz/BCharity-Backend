process.stdout.write("\033c");

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const app = express();

// CONFIG AND ENVIRONMENT LOADING FROM .env FILE
let config = require('./config')


// MIDDLEWARES
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

const UserModel = require("./models/users.model");

console.log({mongo : config.mongoURL});
const {authenticated} = require('./services/auth.service');

mongoose.connect(
  config.mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  err => {
    if (err) {
      throw new Error(err);
    }
    console.info("💾  Mongoose is connected");
  }
);

// ROUTING
const apiRouter = require("./routes");
app.use("/api", apiRouter);

app.get("/api/whoami", authenticated, (req, res) => {
  res.send(`jalou! ${res.locals.user.name}`);
});

// Init server
app.listen( process.env.PORT ||  config.port, err => {
  if (err) {
    throw new Error(err);
  }
  console.info("\n\n" + ">".repeat(40));
  console.info(" 💻  Reboot Server Live");
  console.info(` 📡  PORT: http://localhost:${config.port}`);
  console.info(">".repeat(40) + "\n\n");
});