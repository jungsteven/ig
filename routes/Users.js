const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = express.Router();
const User = require("../models/User");

users.use(cors());
process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + "You are Registered!" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Password comparison
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            user_name: user.user_name,
            email: user.email
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.json({ error: "User doesn't exist" });
        }
      } else {
        res.json({ error: "User doesn't exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

users.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("User doesn't exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = users;
