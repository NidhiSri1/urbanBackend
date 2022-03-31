// mongodb+srv://srinidhi:<password>@cluster0.37jzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://srinidhi:urbanclap@cluster0.37jzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};
