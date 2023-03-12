import chalk from "chalk";
import getFile from "./index.js";

const path = process.argv;

async function fileProcess(path) {
	const result = await getFile(path[2]);
	console.log(chalk.yellow("List of links"), result);
}

fileProcess(path);
