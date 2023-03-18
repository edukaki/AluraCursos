import Express from "express";

const app = Express();
app.use(Express.json());

const books = [
	{
		id: 1,
		title: "The Lord of the Rings",
	},
	{
		id: 2,
		title: "Harry Potter and the Philosopher's Stone",
	},
	{
		id: 3,
		title: "The Hobbit",
	},
];

app.get("/", (req, res) => {
	res.status(200).send("Library API");
});

app.get("/books", (req, res) => {
	res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
	const index = getBook(req.params.id);
	res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
	books.push(req.body);
	res.status(201).send("Book added to the library");
});

app.put("/books/:id", (req, res) => {
	const index = getBook(req.params.id);
	books[index] = {
		title: req.body,
	};
	res.status(201).json(books);
});

app.delete("/books/:id", (req, res) => {
	const { id } = req.params;
	const index = getBook(id);
	books.splice(index, 1);
	res.send(`Book ${id} removed`);
});

function getBook(id) {
	return books.findIndex((book) => book.id == id);
}

export default app;
