document.addEventListener("DOMContentLoaded", CreateIt);

const table = document.getElementById("slideRule");

async function GetIt() {
	const LongString = await fetch('SlideRuleScale.txt');
	if (!LongString.ok) {
		return "";
	}
	return await LongString.text();
}

async function CreateIt() {
	let first = true;
	let query = "thead";
	let dataelem = "th";
	const str = await GetIt()
	str.split("\n").forEach(line => {
		let body = table.querySelector(query);
		let row = document.createElement("tr");
		line.split(",").forEach(dat => {
			let col = document.createElement(dataelem);
			col.innerText = dat;
			row.appendChild(col);
		});
		body.appendChild(row);
		if (first) {
			query = "tbody";
			dataelem = "td";
			first = false;
		}
	});
}