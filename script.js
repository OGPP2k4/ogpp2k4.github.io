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
	for (const line of str.split("\n")) {
		const body = table.querySelector(query);
		const row = document.createElement("tr");
		if (line.match(":")) {
			const col = document.createElement("th");
			col.innerText = line;
			col.setAttribute("colspan", 5);
			row.appendChild(col);
			body.appendChild(row);
			continue;
		}
		for (const dat of line.split(",")) {
			if (dat == "dec") {
				row.setAttribute("class", "invert");
			}
			const col = document.createElement(dataelem);
			col.innerText = dat;
			row.appendChild(col);
		}
		body.appendChild(row);
		if (first) {
			query = "tbody";
			dataelem = "td";
			first = false;
		}
	}
}