const jwt = require('jsonwebtoken');
const Admin = require('../model/admin');

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if(!authorization){
        return res.status(401).json({error: "Auth token required!"});
    }
    
    const token = authorization.split(' ')[1];
    try {
        const { adminId } = jwt.verify(token, process.env.SECRET_KEY);
        const admin = await Admin.findOne({ _id: adminId });
        req.admin = admin;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }
}

module.exports = requireAuth;