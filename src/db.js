const mongoose = require("mongoose");

mongoose
	.connect(
		process.env.MONGODB_URL || "mongodb://localhost:27017/loginDB",
	)
	.then(() => console.log("MONGODB Connected..."))
	.catch((err) => console.error("Error connecting to MONGODB", err));

const LoginSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const collection = new mongoose.model("loginCollection", LoginSchema);
module.exports = collection;
