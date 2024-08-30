const router = require("express").Router();
const multer = require("multer");
const { getDealerShips, addDealerShip, deleteDealerShip, createAdmin, getReferences, addReference, deleteReference, getProjects, addProject, deleteProject, getCategories, addCategorie, deleteCategorie, makeSuperAdmin, makeAdmin, getAdmins, getMessages, uploadImageLocal, removeAdmin, getCounts, deleteMessage } = require("../controller/admin");
const requireAuth = require("../middleware/requireAuth");
const isAdmin = require("../middleware/isAdmin");
const isSuperAdmin = require("../middleware/isSuperAdmin");

const multerMiddleware = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 15 * 1024 * 1024, // 5MB limit
    },
  });
  

router.use(requireAuth);
router.use(isAdmin);

//Count işlemleri
router.get("/count", getCounts);

//Image işlemleri
router.post("/upload", multerMiddleware.single("name"), uploadImageLocal);

//dealership işlemleri
router.get("/dealership", getDealerShips);
router.post("/dealership", addDealerShip);
router.delete("/dealership/:id", deleteDealerShip);

//Reference işlemleri
router.get("/reference", getReferences);
router.post("/reference", addReference);
router.delete("/reference/:id", deleteReference);

//Project İşlemleri
router.get("/project", getProjects);
router.post("/project", addProject);
router.delete("/project/:id", deleteProject);

//Categorie İşlemleri
router.get("/categorie", getCategories);
router.post("/categorie", addCategorie);
router.delete("/categorie/:id", deleteCategorie);


router.get("/admins", getAdmins);
router.use(isSuperAdmin);

// Message işlemleri
router.get("/message", getMessages);
router.delete("/message/:id", deleteMessage)
//role işlemleri
router.put("/superadmin/:id", makeSuperAdmin);
router.put("/admin/:id", makeAdmin)
//admin işlemleri
router.post("/createadmin", createAdmin);
router.delete("/admin/:id", removeAdmin);

module.exports = router;