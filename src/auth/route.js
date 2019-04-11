"use strict";

const express = require("express");
const router = new express.Router();
const controller = require("./controller");

router.post("/", controller.authenticate);

module.exports = router;