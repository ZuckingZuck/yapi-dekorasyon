const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const adminRouter = require("./router/admin");
const clientRotuer = require("./router/client");
const authRouter = require("./router/auth");

app.use(cors());
app.use(express.json())
app.use('/img', express.static(__dirname + '/img'));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/admin", adminRouter);
app.use("/api/client", clientRotuer);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT;
const Connection = process.env.Connection;

mongoose.connect(Connection);
app.listen(PORT, () => {
    console.log("App listening on:", PORT);
});