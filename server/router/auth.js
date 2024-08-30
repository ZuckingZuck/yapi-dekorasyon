const router = require("express").Router();

const { loginAdmin } = require("../controller/auth");

router.post("/login", loginAdmin);

module.exports = router;