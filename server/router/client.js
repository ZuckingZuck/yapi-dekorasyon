const router = require("express").Router();
const { getReferences } = require("../controller/admin");
const { getDealerShips, getCategories, getProjects, sendMessage } = require("../controller/client");

router.get("/dealership", getDealerShips);
router.get("/reference", getReferences);
router.get("/project", getProjects);
router.get("/categorie", getCategories);
router.post("/message", sendMessage);
module.exports = router;