import Express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
	console.log("Connection successfull");
});

const app = Express();
app.use(Express.json());
routes(app);

export default app;

// const books = [
// 	{
// 		id: 1,
// 		title: "The Lord of the Rings",
// 	},
// 	{
// 		id: 2,
// 		title: "Harry Potter and the Philosopher's Stone",
// 	},
// 	{
// 		id: 3,
// 		title: "The Hobbit",
// 	},
// ];

// app.get("/", (req, res) => {
// 	res.status(200).send("Library API");
// });

// app.get("/books", async (req, res) => {
// 	try {
// 		res.status(200).json(await books.find({}));
// 	} catch (error) {
// 		res.status(404).json({ message: error.message });
// 	}
// });

// app.get("/books/:_id", async (req, res) => {
// 	try {
// 		const index = await req.params._id;
// 		res.status(200).json(books.findById(index));
// 	} catch (error) {
// 		res.status(404).json({ message: error.message });
// 	}
// });

// app.post("/books", (req, res) => {
// 	books.push(req.body);
// 	res.status(201).send("Book added to the library");
// });

// app.put("/books/:id", (req, res) => {
// 	const index = getBook(req.params.id);
// 	books[index] = {
// 		title: req.body,
// 	};
// 	res.status(201).json(books);
// });

// app.delete("/books/:id", (req, res) => {
// 	const { id } = req.params;
// 	const index = getBook(id);
// 	books.splice(index, 1);
// 	res.send(`Book ${id} removed`);
// });

// function getBook(id) {
// 	return books.findIndex((book) => book.id == id);
// }
