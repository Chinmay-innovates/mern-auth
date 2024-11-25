const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONOGO_URL)
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
		hashedPassword: {
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
