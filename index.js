const express = require("express");
const connect = require("./src/config/db");
const ServiceControllers = require("./src/controllers/serviceController");
const port = process.env.PORT || 8000;
const app = express();
require("dotenv").config();
const axios = require("axios");
const client = require("twilio")(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
app.use(express.json());

app.use("/", ServiceControllers);

//LOGIN

app.post("/login", (req, res) => {
    client.verify
        .services(process.env.SERVICESID)
        .verifications.create({
            to: `+${918197023966}`,
            channel: "sms",
        })
        .then((data) => {
            res.status(200).send("data", verifications.status);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(port, async () => {
    try {
        await connect();
        console.log(`Server Started on port ${port}`);
    } catch (err) {
        console.log(err);
    }
});
