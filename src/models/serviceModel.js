const mongoose = require("mongoose");

//CREATE SCHEMA
const servicesSchema = new mongoose.Schema({
    title: { type: String },
    images: [{ type: String }],
    price: { type: String },
    details: [{ type: String }],
    rating: { type: Number },
});

//CREATE MODEL

module.exports = mongoose.model("service", servicesSchema);
