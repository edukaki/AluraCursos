import http from "http";

const port = 3000;

const routes = {
	"/": "Hello World",
	"/about": "About Us",
	"/contact": "Contact Us",
};

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/plain" });
	req.url in routes ? res.end(routes[req.url]) : res.end("404 Not Found");
});

server.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
