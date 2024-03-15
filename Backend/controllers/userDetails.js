// app.post("/api/v1/user/create", async (req, res) 
exports.createUser = async (req, res) => {
    try {
        // Create a new user document based on the request body
        const newUser = new User({
            age: req.body.age,
            weight: req.body.weight,
            height: req.body.height,
            dietType: req.body.dietType,
            activityLevel: req.body.activityLevel,
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: "User data saved successfully" });
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error(error);
        res.status(500).json({ message: "Failed to save user data" });
    }
};
