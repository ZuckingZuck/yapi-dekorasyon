const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    categorie: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("projects", ProjectSchema);