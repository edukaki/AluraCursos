import Express from "express";
import BookController from "../controllers/booksController.js";

const router = Express.Router();

router
	.get("/books", BookController.getBooks)
	.get("/books/:_id", BookController.getBooksById)
	.post("/books/", BookController.insertNewBook)
	.put("/books/:_id", BookController.updateBook)
	.delete("/books/:_id", BookController.deleteBook);

export default router;
