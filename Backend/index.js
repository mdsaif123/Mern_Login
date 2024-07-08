const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Need to set extended option to true

// MongoDB connection
mongoose.connect("mongodb+srv://mdsaif62041:vWNCrelWZsza47Rq@cluster0.6eahcvc.mongodb.net/")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define User schema and model
const userSchema = new mongoose.Schema({
  name: String, // Changed from string to String (capital S)
  email: String, // Changed from string to String (capital S)
  password: String // Changed from string to String (capital S)
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user with same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
      // Check if user exists in the database
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: "User not found" });
      }
      // Check if password matches
      if (user.password !== password) {
          return res.status(401).json({ message: "Invalid password" });
      }
      // Login successful
      res.status(200).json({ message: "Login successful" });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Login failed" });
  }
});


app.listen(port, () => {
  console.log("Server is running at port", port);
});
