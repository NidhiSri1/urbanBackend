const express = require("express");
const connect = require("./src/config/db");
const ServiceControllers = require("./src/controllers/serviceController");
const port = process.env.PORT || 8000;
const app = express();
require("dotenv").config();
const axios = require("axios");

app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("hi");
// });

app.use("/", ServiceControllers);

app.listen(port, async () => {
    try {
        await connect();
        console.log("Server Started on port 3002");
    } catch (err) {
        console.log(err);
    }
});
