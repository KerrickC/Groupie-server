const express = require("express");
const app = express();
const passport = require("passport");

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  function (req, res) {
    // Successful authentication, redirect success.
    let prevSession = req.session;
    req.session.regenerate((err) => {
      // Compliant
      Object.assign(req.session, prevSession);
      res.redirect("/");
    });
  }
);

module.exports = app;
