import fs from "fs";
import chalk from "chalk";

function getLinks(text) {
	const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s#.].[^\s.].[^\s\)]*)\)/gm;
	const capture = [...text.matchAll(regex)];
	const result = capture.map((item) => {
		return {
			[item[1]]: [item[2]],
		};
	});
	return result;
}

function handleErr(err) {
	throw new Error(chalk.red(err.code, "error reading file"));
}

async function getFile(path) {
	try {
		const response = await fs.promises.readFile(path, "utf-8");
		console.log(getLinks(response));
	} catch {
		handleErr(err);
	}
}

// 	fs.promises
// 		.readFile(path, "utf-8")
// 		.then((text) => {
// 			return text;
// 		})

// 		.catch((err) => {
// 			handleErr(err);
// 		});
// }

// function getFile(path) {
// 	fs.readFile(path, "utf-8", (err, data) => {
// 		if (err) {
// 			handleErr(err);
// 		}
// 		console.log(chalk.green(data));
// 	});
// }

getFile("./src/text.md");
