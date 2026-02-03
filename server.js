const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/dockerdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
    res.send("Dockerized Node.js App Running 🚀");
});

app.post("/add", async (req, res) => {
    const user = new User({ name: req.body.name });
    await user.save();
    res.send("User Added");
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
