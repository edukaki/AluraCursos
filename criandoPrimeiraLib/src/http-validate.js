function getLinksFromArray(arrLinks) {
	return arrLinks.map((objlink) => Object.values(objlink).join());
}

function testLinks(arrLinks) {
	console.log(arrLinks);
	arrLinks.forEach((link) => {
		fetch(link)
			.then((response) => {
				console.log(response.status);
			})
			.catch((error) => {});
	});
}

export default function validatedList(list) {
	const arrLinks = getLinksFromArray(list);
	return testLinks(arrLinks);
}
