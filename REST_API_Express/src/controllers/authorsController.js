import authors from "../models/Author.js";

class AuthorController {
	static getAuthors = async (req, res) => {
		try {
			res.status(200).json(await authors.find({}));
		} catch (error) {}
	};

	static getAuthorById = async (req, res) => {
		try {
			res.status(200).json(await authors.findById(req.params._id));
		} catch (error) {
			res.status(400).json({ title: error.message });
		}
	};

	static insertNewAuthor = async (req, res) => {
		try {
			res.status(201).json(await authors.create(req.body));
		} catch (error) {
			res.status(500).json({ title: error.message });
		}
	};

	static updateAuthor = async (req, res) => {
		try {
			res
				.status(200)
				.json(await authors.findByIdAndUpdate(req.params._id, req.body));
		} catch (error) {
			res.status(500).json({ title: error.message });
		}
	};

	static deleteAuthor = async (req, res) => {
		try {
			res.status(200).json(await authors.findByIdAndDelete(req.params._id));
		} catch (error) {
			res.status(500).json({ title: error.message });
		}
	};
}

export default AuthorController;
