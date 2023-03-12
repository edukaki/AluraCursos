import chalk from "chalk";
import fs from "fs";
import getFile from "./index.js";

const path = process.argv;

async function fileProcess(arg) {
	const path = arg[2];

	if (fs.lstatSync(path).isFile()) {
		const result = await getFile(path);
		console.log(chalk.yellow("List of links"), result);
	} else if (fs.lstatSync(path).isDirectory()) {
		const files = await fs.promises.readdir(path);
		files.map(async (file) => {
			const result = await getFile(path + file);
			console.log(chalk.yellow("list of links"), result);
		});
	}
}

fileProcess(path);
