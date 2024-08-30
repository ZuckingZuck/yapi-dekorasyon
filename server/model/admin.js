const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    }
}, {timestamps: true})

module.exports = mongoose.model("admins", AdminSchema);