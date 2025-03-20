const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
const User = require("./model/User");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public")); // For serving static files

// Set EJS as the template engine
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Home Page
app.get("/", (req, res) => {
  res.redirect("/users");
});

// Display All Users
app.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    res.render("index", { users });
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

// Render Form to Create a New User
app.get("/users/new", (req, res) => {
  res.render("new");
});

// Create a New User
app.post("/users", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    await User.create({ name, email, age });
    res.redirect("/users");
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});

// Render Edit User Form
app.get("/users/edit/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.render("edit", { user });
  } catch (error) {
    res.status(500).send("Error fetching user");
  }
});

// Update User
app.put("/users/:id", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    await User.findByIdAndUpdate(req.params.id, { name, email, age });
    res.redirect("/users");
  } catch (error) {
    res.status(500).send("Error updating user");
  }
});

// Delete User
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/users");
  } catch (error) {
    res.status(500).send("Error deleting user");
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


















