const DealerShipDB = require("../model/dealerShip");
const ReferenceDB = require("../model/reference");
const ProjectDB = require("../model/project");
const CategorieDB = require("../model/categorie");
const MessageDB = require("../model/message");

const getDealerShips = async (req, res) => {
    try {
        const dealerShips = await DealerShipDB.find();
        res.status(200).json(dealerShips);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const getReferences = async (req, res) => {
    try {
        const references = await ReferenceDB.find();
        res.status(200).json(references);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const getProjects = async (req, res) => {
    try {
        const projects = await ProjectDB.find();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await CategorieDB.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
    }
}

const sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newMessage = await new MessageDB({ name, email, subject, message });
        newMessage.save();
        return res.status(201).json({message: "Mesajınız alındı."})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = { getDealerShips, getReferences, getProjects, getCategories, sendMessage };