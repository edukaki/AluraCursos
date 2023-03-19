import Express from "express";
import BookController from "../controllers/booksController.js";

const router = Express.Router();

router.get("/books", BookController.getBooks);
router.get("/books/:_id", BookController.getBooksById);
router.post("/books/", BookController.insertNewBook);
router.put("/books/:_id", BookController.updateBook);
router.delete("/books/:_id", BookController.deleteBook);

export default router;
