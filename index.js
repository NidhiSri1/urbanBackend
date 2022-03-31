const express = require("express");
const connect = require("./src/config/db");
const ServiceControllers = require("./src/controllers/serviceController");

const app = express();
require("dotenv").config();
const axios = require("axios");

app.use(express.json());

app.use("/service", ServiceControllers);

app.listen(3002, async () => {
    try {
        await connect();
        console.log("Server Started on port 3002");
    } catch (err) {
        console.log(err);
    }
});
