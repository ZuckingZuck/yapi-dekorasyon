const mongoose = require("mongoose");

const CategorieSchema = mongoose.Schema({
    name: String
}, {timestamps: true})

module.exports = mongoose.model("categories", CategorieSchema);