const express = require("express");
const path = require("path");
const hbs = require("hbs");
const collection = require("./db");
const PORT = 3000;
const app = express();

app.use(express.json());

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "../templates"));

app.use("/public", express.static("public"));
app.use("/src", express.static("src"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("login");
});

// Send the signup page UI
app.get("/signup", (req, res) => {
	res.render("signup");
});

// The signup route handles the POST request to create a new user
app.post("/signup", async (req, res) => {
	// Get the name and password from the request body
	const { name, password } = req.body;

	if (!name || !password) {
		return res.status(400).send("Name and password are required");
	}
	if (password.length < 6) {
		return res.status(400).send("Password must be at least 6 characters");
	}
	await collection.insertMany([{ name, password }]);

	// After the user is created, send them to the login page
	res.render("login");
});

//  The login route handles the POST request to login a user
app.post("/login", async (req, res) => {
	try {
		const { name, password } = req.body;
		const existingUser = await collection.findOne({ name: name });

		if (existingUser.password === password) {
			res.render("home", { user: existingUser });
		} else {
			res.send("Incorrect password");
		}
	} catch (error) {
		res.send("Invalid credentials");
	}
});

// get user details from database
app.get("/", async (req, res) => {
	try {
		// find user in database
		const user = await collection.find();
		res.render("home"); // Pass data to HBS template
	} catch (err) {
		res.status(500).send("Error fetching data");
	}
});

// server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
