"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const md5 = require("md5");

exports.encrypt = (string) => {
  const hash = md5(string + global.SALT_KEY);
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(hash, salt);
};

exports.isMatch = (string, encryptedString) => {
  const comp = md5(string + global.SALT_KEY);
  return bcrypt.compareSync(comp, encryptedString);
};


exports.generateToken = async (data) => {
  return jwt.sign(data, global.SALT_KEY, {expiresIn: global.oneHour});
};

exports.decodeToken = async (token) => {
  return await jwt.verify(token, global.SALT_KEY);
};


exports.authenticate = async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers[global.accessTokenHeader];
  if (token) {
    try {
      const data = await (this.decodeToken(token));
      if (data) {
        req.id = data.id;
        next();
      } else {
        res.status(401).send();
      }
    } catch (error) {
      console.log("Error while trying to authenticate. Error Message: " + error.message);
      res.status(500).send(error.message);
    }
  } else {
    res.status(401).send();
  }
};


exports.authorizeById = async (req, res, next) => {
  const userId = req.id;
  if (userId) {
    const reqId = req.params.id;
    if (userId === reqId) {
      next();
    } else {
      res.status(401).send();
    }
  } else {
    res.status(400).send();
  }

};

