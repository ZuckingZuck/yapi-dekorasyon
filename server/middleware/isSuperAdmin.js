const isSuperAdmin = (req, res, next) => {
    const admin = req.admin;
    if (!admin || admin.role !== "superAdmin") {
        return res.status(403).json({ error: 'Bu işlemi gerçekleştirmek için admin yetkilerine sahip değilsiniz' });
    }

    next();
};

module.exports = isSuperAdmin;