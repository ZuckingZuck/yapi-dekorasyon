const mongoose = require("mongoose");

const DealerShipSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
}, {timestamps: true})

module.exports = mongoose.model("dealerships", DealerShipSchema)