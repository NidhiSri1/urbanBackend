const express = require("express");
const Services = require("../models/serviceModel");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const service = await Services.create(req.body);
        res.send(service);
    } catch (err) {
        console.log(err);
    }
});
router.get("/", async (req, res) => {
    try {
        const getData = await Services.find().lean().exec();
        console.log(getData);
        console.log(getData);
        res.send(getData);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
