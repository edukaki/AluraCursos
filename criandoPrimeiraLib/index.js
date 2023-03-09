import fs from "fs";
import chalk from "chalk";

function handleErr(err) {
	throw new Error(chalk.red(err.code, "error reading file"));
}

function getFile(path) {
	fs.promises
		.readFile(path, "utf-8")
		.then((text) => {
			console.log(chalk.green(text));
		})

		.catch((err) => {
			handleErr(err);
		});
}

// function getFile(path) {
// 	fs.readFile(path, "utf-8", (err, data) => {
// 		if (err) {
// 			handleErr(err);
// 		}
// 		console.log(chalk.green(data));
// 	});
// }

getFile("./src/text.md");
