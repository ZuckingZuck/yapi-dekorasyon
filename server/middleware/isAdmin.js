const isAdmin = (req, res, next) => {
    const admin = req.admin;
    if(!admin){
        return res.status(403).json({ error: 'Bu işlemi gerçekleştirmek için admin yetkilerine sahip değilsiniz' });
    }

    if (admin.role === "admin" || admin.role === "superAdmin") {
        next();
    }else{
        return res.status(403).json({ error: 'Bu işlemi gerçekleştirmek için admin yetkilerine sahip değilsiniz' });
    }

    
};

module.exports = isAdmin;