const User = require('../model/usermodel');
const UserData = require('../model/userData');

exports.createUser = async (req, res) => {
    try {
        // Find the user data by user ID
        let userData = await UserData.findOne({ user: req.user.userId });
        let userName = await User.findOne({ _id: req.user.userId });

        console.log(req);
        
        if (!userData) {
            // If user data doesn't exist, create a new document
            userData = new UserData({
                Name: userName.name,
                user: req.data.userId, 
                Age: req.body.data.Age,
                Weight: req.body.data.Weight,
                Height: req.body.data.Height,
                Disease: req.body.data.Disease,
                Diet_Type: req.body.data.Diet_Type,
                Activity_level: req.body.data.Activity_level,
            });
            
            // Save the new user data
            const response = await userData.save();
            if (!response) {
                return res.status(401).json({ message: "Failed to save user data" });
            }
        } else {
            // If user data already exists, update the existing document
            userData.Name = userName.name;
            userData.Age = req.body.data.Age;
            userData.Weight = req.body.data.Weight;
            userData.Height = req.body.data.Height;
            userData.Disease = req.body.data.Disease;
            userData.Diet_Type = req.body.data.Diet_Type;
            userData.Activity_level = req.body.data.Activity_level;

            // Save the updated user data
            const response = await userData.save();
            if (!response) {
                return res.status(401).json({ message: "Failed to update user data" });
            }
        }

        res.status(201).json({ message: "User data saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to save or update user data" });
    }
};


exports.getUserDetails = async (req, res) => {
    try {
        // Find the user data by user ID
        let userData = await UserData.findOne({ user: req.user.userId });

        if (!userData) {
            return res.status(401).json({ message: "Bad request" });
        }

        res.status(201).json({ message: "User data saved successfully", data: userData});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to save user data" });
    }
};




