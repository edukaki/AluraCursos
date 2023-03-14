import chalk from "chalk";
import fs from "fs";
import validatedList from "./http-validate.js";
import getFile from "./index.js";

const path = process.argv;

async function fileProcess(arg) {
	const path = arg[2];
	const validate = arg[3] === "--validate";

	try {
		fs.lstatSync(path);
	} catch (err) {
		console.log(chalk.red(err));
		return;
	}

	if (fs.lstatSync(path).isFile()) {
		const result = await getFile(path);
		print(validate, result);
	} else if (fs.lstatSync(path).isDirectory()) {
		const files = await fs.promises.readdir(path);
		files.map(async (file) => {
			const result = await getFile(path + file);
			print(validate, result, file);
		});
	}
}

async function print(validate, result, file = "") {
	if (validate) {
		result !== "no links found" &&
			console.log(
				file && chalk.black.bgGreen(file + ":"),
				chalk.yellow("validated links"),
				await validatedList(result)
			);
	} else {
		console.log(
			file && chalk.black.bgGreen(file + ":"),
			chalk.yellow("list of links"),
			result
		);
	}
}

fileProcess(path);
