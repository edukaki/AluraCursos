import chalk from "chalk";
import fs from "fs";
import getFile from "./index.js";

const path = process.argv;

async function fileProcess(arg) {
	const path = arg[2];

	try {
		fs.lstatSync(path);
	} catch (err) {
		console.log(chalk.red(err));
		return;
	}

	if (fs.lstatSync(path).isFile()) {
		const result = await getFile(path);
		print(result);
	} else if (fs.lstatSync(path).isDirectory()) {
		const files = await fs.promises.readdir(path);
		files.map(async (file) => {
			const result = await getFile(path + file);
			print(result);
		});
	}
}

function print(result) {
	console.log(chalk.yellow("list of links"), result);
}

fileProcess(path);
