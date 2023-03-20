import Express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = Express.Router();

router
	.get("/authors", AuthorController.getAuthors)
	.get("/authors/:_id", AuthorController.getAuthorById)
	.post("/authors/", AuthorController.insertNewAuthor)
	.put("/authors/:_id", AuthorController.updateAuthor)
	.delete("/authors/:_id", AuthorController.deleteAuthor);

export default router;
