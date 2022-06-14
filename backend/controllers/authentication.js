const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const {User} = db;

router.post("/", async (req, res) => {
    res.send("IN HERE");
});

module.exports = router;
