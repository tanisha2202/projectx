const User = require('../models/User'); // Example import of User model

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Example query using Mongoose
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers, // Ensure this method is exported
    // other controller methods here if any
};
