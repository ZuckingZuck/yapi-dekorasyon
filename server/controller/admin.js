const DealerShipDB = require("../model/dealerShip");
const AdminDB = require("../model/admin");
const ReferenceDB = require("../model/reference");
const ProjectDB = require("../model/project");
const CategorieDB = require("../model/categorie");
const MessageDB = require("../model/message");
const bcrypt = require("bcrypt");

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


//DealerShip İşlemleri
const getDealerShips = async (req, res) => {
    try {
        const dealerShips = await DealerShipDB.find();
        res.status(200).json(dealerShips);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const addDealerShip = async (req, res) => {
    try {
        const { name, imgUrl } = req.body;
        const newDealerShip = await new DealerShipDB({ name, imgUrl });
        newDealerShip.save();
        res.status(201).json(newDealerShip);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteDealerShip = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedDealerShip = await DealerShipDB.deleteOne({ _id: id });
        res.status(200).json(deletedDealerShip);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//Reference İşlemleri
const getReferences = async (req, res) => {
    try {
        const references = await ReferenceDB.find();
        res.status(200).json(references);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const addReference = async (req, res) => {
    try {
        const { name, imgUrl } = req.body;
        const newReference = await new ReferenceDB({ name, imgUrl });
        newReference.save();
        res.status(201).json(newReference);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const deleteReference = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedReference = await ReferenceDB.deleteOne({ _id: id });
        res.status(200).json(deletedReference);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

//Project İşlemleri
const getProjects = async (req, res) => {
    try {
        const projects = await ProjectDB.find();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const addProject = async (req, res) => {
    try {
        const { name, imgUrl, categorie } = req.body;
        const newProject = await new ProjectDB({ name, imgUrl, categorie });
        newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProject = await ProjectDB.deleteOne({ _id: id });
        res.status(200).json(deletedProject);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

//Categorie İşlemleri
const getCategories = async (req, res) => {
    try {
        const categories = await CategorieDB.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const addCategorie = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategorie = await new CategorieDB({ name });
        newCategorie.save();
        res.status(201).json(newCategorie);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

const deleteCategorie = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedCategorie = await CategorieDB.deleteOne({ _id: id });
        res.status(200).json(deletedCategorie);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

//Message İşlemleri
const getMessages = async (req, res) => {
    try {
        const messages = await MessageDB.find();
        res.status(200).json(messages);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteMessage = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteMessage = await MessageDB.deleteOne({ _id: id });
        if (!deleteMessage) {
            res.status(404).json({ message: "Silinmek istenen mesaj bulunamadı." });
        } else {
            res.status(200).json({ message: "Mesaj silindi!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//Role işlemleri
const makeSuperAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await AdminDB.findOne({ _id: id });
        if (admin) {
            admin.role = "superAdmin";
            admin.save();
            res.status(200).json({ message: "İşlem Başarılı"});
        } else {
            res.status(404).json({ error: "Admin bulanamadı." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const makeAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await AdminDB.findOne({ _id: id });
        if (admin) {
            admin.role = "admin";
            admin.save();
            res.status(200).json({ message: "İşlem başarılı"});
        } else {
            res.status(404).json({ error: "Admin bulanamadı." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const removeAdmin = async (req, res) => {
    try {
        const admin = req.admin;
        const id = req.params.id;

        if(admin._id == id){
            return res.status(422).json({ message: "Yönetici kendi hesabını silemez!"});
        }else{
            const deletedAdmin = await AdminDB.deleteOne({ _id: id });
            res.status(200).json(deletedAdmin);
        }
        
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
}

//Count İşlemleri
const getCounts = async (req, res) => {
    try {
        const messageCount = await MessageDB.countDocuments();
        const referenceCount = await ReferenceDB.countDocuments();
        const dealerShipCount = await DealerShipDB.countDocuments();
        const projectCount = await ProjectDB.countDocuments();
        const categorieCount = await CategorieDB.countDocuments();
        const adminCount = await AdminDB.countDocuments();

        const counts = {
            messageCount,
            referenceCount,
            dealerShipCount,
            projectCount,
            categorieCount,
            adminCount
        }
        res.status(200).json(counts);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

//Image İşlemleri
const uploadImageLocal = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Dosya sağlanmadı" });
        }

        const file = req.file;
        const originalname = file.originalname;
        const uniqueSuffix = uuidv4();
        const fileName = `${path.parse(originalname).name}-${uniqueSuffix}${path.extname(originalname)}`;

        // Resmi belirli bir klasöre kaydet (örneğin, sunucunun kök dizinindeki "img" klasörüne)
        const uploadPath = path.join(__dirname, '..', 'img', fileName);
        fs.writeFileSync(uploadPath, file.buffer);

        const publicUrl = `http://localhost:5000/img/${fileName}`; // Resmin erişim URL'si
        res.status(200).json({ imgUrl: publicUrl });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "İç Sunucu Hatası" });
    }
};

//Admin İşlemleri
const createAdmin = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const checkAdmins = await AdminDB.find({
            $or: [
                { username: username },
                { email: email }
            ]
        });

        if (checkAdmins.length > 0) {
            return res.status(409).json({ error: "Girdiğiniz kullanıcı adı veya email zaten kullanımda." });
        }

        const hashedPassword = await hashPassword(password);
        const newAdmin = await new AdminDB({ username, email, password: hashedPassword });
        newAdmin.save();
        if (newAdmin) {
            res.status(201).json({ message: "Admin oluşturuldu." });
        } else {
            res.status(500).json({ error: "Admin oluşturulamadı. " });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getAdmins = async (req, res) => {
    try {
        const admins = await AdminDB.find({}, { password: 0 });
        res.status(200).json(admins);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPasswd = await bcrypt.hash(password, salt);
    return hashedPasswd;
}

module.exports = {
    createAdmin, getAdmins,
    getDealerShips, addDealerShip, deleteDealerShip,
    getReferences, addReference, deleteReference,
    getProjects, addProject, deleteProject,
    getCategories, addCategorie, deleteCategorie,
    getMessages, deleteMessage,
    makeSuperAdmin, makeAdmin, removeAdmin,
    uploadImageLocal,
    getCounts
};