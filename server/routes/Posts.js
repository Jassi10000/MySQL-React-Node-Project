const express = require("express");
const router = express.Router();
const {Posts}  = require("../models/Posts");

router.get("/" , (req,res) => {
    res.json("hello world")
});

router.post("/" , async (req,res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});


module.exports = router;