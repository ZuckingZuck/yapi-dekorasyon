const AdminDB = require("../model/admin");
const mongoSanitize = require('mongo-sanitize');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const sanitizedEmail = mongoSanitize(email);

        const admin = await AdminDB.findOne({ email: sanitizedEmail });
        if (!admin) {
            return res.status(401).json({ error: 'Geçersiz e-posta veya şifre' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Geçersiz e-posta veya şifre' });
        }

        const token = jwt.sign({ adminId: admin._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        res.status(200).json({
            message: 'Başarıyla giriş yaptınız',
            admin: {
                username: admin.username,
                email: admin.email,
                role: admin.role
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Giriş sırasında bir hata oluştu' });
    }
};

module.exports = { loginAdmin };