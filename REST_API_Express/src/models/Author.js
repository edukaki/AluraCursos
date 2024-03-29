import mongoose from "mongoose";

const authorSchema = mongoose.Schema(
	{
		id: { type: String },
		name: { type: String },
		nacionality: { type: String },
	},
	{ versionKey: false }
);

const authors = mongoose.model("authors", authorSchema);

export default authors;
