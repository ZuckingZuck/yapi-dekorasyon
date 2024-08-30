const mongoose = require("mongoose");

const ReferenceSchema = mongoose.Schema({
    name: String,
    imgUrl: String
}, {timestamps: true})

module.exports = mongoose.model("references", ReferenceSchema);