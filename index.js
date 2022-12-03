require("dotenv").config();

const express = require("express");
const { urlencoded, json } = require("body-parser");
const session = require("express-session");
const passport = require("passport");

/* Include routers here */
const userRouters = require("./routers/userShemaRouters");
const groupRouters = require("./routers/groupSchemaRouters");
const authRouters = require("./routers/authRouters");
const googleAuthRouters = require("./routers/googleAuthRouters");

const app = express();
app.disable("x-powered-by");

require("./utils/dbUtils");

const PORT = process.env.PORT || 5000;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
app.use(require("cookie-parser")());
app.use(passport.initialize());
app.use(passport.session());

require("./utils/auth");
require("./utils/googleAuth");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//register routers
app.use("", userRouters);
app.use("", groupRouters);
app.use("", googleAuthRouters);
app.use("", authRouters);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
