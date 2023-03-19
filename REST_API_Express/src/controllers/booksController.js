import books from "../models/Book.js";

class BookController {
	static getBooks = async (req, res) => {
		try {
			res.status(200).json(await books.find({}));
		} catch (error) {}
	};

	static getBooksById = async (req, res) => {
		try {
			res.status(200).json(await books.findById(req.params._id));
		} catch (error) {
			res.status(400).json({ title: error.message });
		}
	};

	static insertNewBook = async (req, res) => {
		try {
			res.status(201).json(await books.create(req.body));
		} catch (error) {
			res.status(500).json({ title: error.message });
		}
	};

	static updateBook = async (req, res) => {
		try {
			res
				.status(200)
				.json(await books.findByIdAndUpdate(req.params._id, req.body));
		} catch (error) {
			res.status(500).json({ title: error.message });
		}
	};

	static deleteBook = async (req, res) => {
		try {
			res.status(200).json(await books.findByIdAndDelete(req.params._id));
		} catch (error) {
			res.status(500).json({ title: error.message });
		}
	};
}

export default BookController;
