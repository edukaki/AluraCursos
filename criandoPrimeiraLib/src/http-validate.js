function getLinksFromArray(arrLinks) {
	return arrLinks.map((objlink) => Object.values(objlink).join());
}

function testLinks(arrLinks) {
	const status = Promise.all(
		arrLinks.map(async (link) => {
			try {
				const response = await fetch(link);
				return response.status;
			} catch (error) {}
		})
	);
	return status;
}

export default async function validatedList(list) {
	const arrLinks = getLinksFromArray(list);
	const status = await testLinks(arrLinks);
	return list.map((object, index) => ({
		...object,
		status: status[index] || "Link Not Found",
	}));
}
