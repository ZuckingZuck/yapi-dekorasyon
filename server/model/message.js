const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    subject: String,
    message: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("messages", MessageSchema);