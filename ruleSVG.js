const SVGNS = "http://www.w3.org/2000/svg";

var piSymbol = "&#928;"
var tauSymbol = "&#932;"

var min = 0.0;
var max = rule.width * rule.pixelsPerUnit;
var spacing = rule.height * rule.pixelsPerUnit * 0.05;
var slide = rule.spacing * rule.pixelsPerUnit;
var margin = rule.margin * rule.pixelsPerUnit;
var sizeXL = spacing; //RMF
var sizeL = sizeXL / 2; //RMF
var sizeM = sizeXL / 3; //MF
var sizeS = sizeXL / 5; //F

var svgWidth = max + margin * 2;
var svgHeight = sizeXL * 2 / 0.8;
var startX = margin;
var startYd = svgHeight * 0.01; //lines down
var startYu = svgHeight - svgHeight * 0.01; //lines up

var fontSize = spacing * 0.7;
var strokeWidth = max * 0.00015;

function SVGText(x, y, label, domainBaseLine, Style) {
	const txt = document.createElementNS(SVGNS, "text");
	txt.setAttribute("font-family", "Helvetica");
	txt.setAttribute("text-anchor", "middle");
	txt.setAttribute("font-size", fontSize);
	txt.setAttribute("x", x);
	txt.setAttribute("y", y);
	txt.innerHTML = label;
	if (domainBaseLine !== null) {
		txt.setAttribute("dominant-baseline", domainBaseLine);
	}
	if (Style !== null) {
		txt.setAttribute("style", Style);
	}
	return txt;
}

function SVGLine(x1, y1, x2, y2, Style) {
	const lin = document.createElementNS(SVGNS, "line");
	lin.setAttribute("x1", x1);
	lin.setAttribute("y1", y1);
	lin.setAttribute("x2", x2);
	lin.setAttribute("y2", y2);
	if (Style !== null) {
		txt.setAttribute("style", Style);
	}
	return lin;
}

function SVGRectangle(x, y, width, height, Style) {
	const lin = document.createElementNS(SVGNS, "line");
	lin.setAttribute("x", x);
	lin.setAttribute("y", y);
	lin.setAttribute("width", width);
	lin.setAttribute("height", height);
	if (Style !== null) {
		txt.setAttribute("style", Style);
	}
	return lin;
}

function SVGGroup(transform) {
	const grp = document.createElementNS(SVGNS, "g");
	grp.setAttribute("transform", transform);
}

function SVGPath(strokewidth, stroke, d) {
	const pth = document.createElementNS(SVGNS, "line");
	pth.setAttribute("stroke-width", strokewidth);
	pth.setAttribute("stroke", stroke);
	pth.setAttribute("d", d);
	return pth;
}

var svgParent = document.createElementNS(SVGNS, "svg");
svgParent.setAttribute("width", svgWidth);
svgParent.setAttribute("height", (svgHeight * 7 + slide * 2));
svgParent.setAttribute("xmlns", SVGNS);

if (rule.showSlide) {
	svgParent.appendChild(SVGRectangle(0, 0, svgWidth, (svgHeight * 7 + slide * 2), `stroke:black;fill:none;stroke-width:${strokeWidth}mm;`));
	svgParent.appendChild(SVGLine(0, (spacing * 4 + spacing / 2 + sizeS), svgWidth, (spacing * 4 + spacing / 2 + sizeS), `stroke:black;fill:none;stroke-width:${strokeWidth}mm;`));
	rule.slide === 0 ? `` : svgParent.appendChild(SVGLine(0, (spacing * 4 + spacing / 2 + slide + sizeS), svgWidth, (spacing * 4 + spacing / 2 + slide + sizeS), `stroke:black;fill:none;stroke-width:${strokeWidth}mm;`));
	svgParent.appendChild(SVGLine(0, (spacing * 12 + spacing / 4 + slide + sizeS * 2), svgWidth, (spacing * 12 + spacing / 4 + slide + sizeS * 2), `stroke:black;fill:none;stroke-width:${strokeWidth}mm;`));
	rule.slide === 0 ? `` : svgParent.appendChild(SVGLine(0, (spacing * 12 + spacing / 4 + slide * 2 + sizeS * 2), svgWidth, (spacing * 12 + spacing / 4 + slide * 2 + sizeS * 2), `stroke:black;fill:none;stroke-width:${strokeWidth}mm;`));
}

var svgGroup = SVGGroup("translate(" + (startX - sizeXL) + ",0)");
svgGroup.appendChild(SVGText((0, (spacing * 1.5), "K", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 3.5), "A", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 5.5 + slide + sizeS * 2), "B", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 8.5 + slide), "CI", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 11.5 + slide), "C", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 13.5 + slide * 2 + sizeS * 2), "D", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 16 + slide * 2 + sizeS * 2), "L", "central", "fill:black;")))
svgParent.appendChild(svgGroup);
//svgParent += `</g>`

svgGroup = SVGGroup("translate(" + (startX + max + sizeXL) + ",0)");
svgGroup.appendChild(SVGText((0, (spacing * 1.5), "K", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 3.5), "A", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 5.5 + slide + sizeS * 2), "B", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 8.5 + slide), "CI", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 11.5 + slide), "C", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 13.5 + slide * 2 + sizeS * 2), "D", "central", "fill:black;")))
svgGroup.appendChild(SVGText((0, (spacing * 16 + slide * 2 + sizeS * 2), "L", "central", "fill:black;")))
svgParent.appendChild(svgGroup);
//svgParent += `</g>`

function cdciScale() {
	// C/D/CI scales
	var cscale = SVGGroup("translate(0, " + (spacing * 10 + slide + sizeS) + ")"); //lines up
	var dscale = SVGGroup("translate(0, " + (spacing * 12 + slide * 2 + sizeS * 3) + ")"); //lines down
	var ciscale = SVGGroup("translate(0, " + (spacing * 7 + slide + sizeS) + ")"); //lines up
	var clabels = {};
	var dlabels = {};
	var cilabels = {};


	cscale += SVGPath("" + strokeWidth + "mm", "black", d);
	var d = ``;
	dscale += SVGPath("" + strokeWidth + "mm", "black", d);
	var d = ``;
	ciscale += SVGPath("" + strokeWidth + "mm", "black", d);
	var d = ``;

	var cdiPi = Math.log10(Math.PI);
	var cdiTau = Math.log10(Math.PI * 2);

	cscale += " M" + (max * cdiPi + startX) + "," + (startYu)
	cscale += " L" + (max * cdiPi + startX) + "," + (startYu - sizeL)
	dscale += " M" + (max * cdiPi + startX) + "," + (startYd)
	dscale += " L" + (max * cdiPi + startX) + "," + (startYd + sizeL)
	ciscale += " M" + (max - max * cdiPi + startX) + "," + (startYu)
	ciscale += " L" + (max - max * cdiPi + startX) + "," + (startYu - sizeL)

	cscale += " M" + (max * cdiTau + startX) + "," + (startYu)
	cscale += " L" + (max * cdiTau + startX) + "," + (startYu - sizeL)
	dscale += " M" + (max * cdiTau + startX) + "," + (startYd)
	dscale += " L" + (max * cdiTau + startX) + "," + (startYd + sizeL)
	ciscale += " M" + (max - max * cdiTau + startX) + "," + (startYu)
	ciscale += " L" + (max - max * cdiTau + startX) + "," + (startYu - sizeL)

	clabels[piSymbol] = (max * cdiPi + startX);
	dlabels[piSymbol] = (max * cdiPi + startX);
	cilabels[piSymbol] = (max - max * cdiPi + startX);
	clabels[tauSymbol] = (max * cdiTau + startX);
	dlabels[tauSymbol] = (max * cdiTau + startX);
	cilabels[tauSymbol] = (max - max * cdiTau + startX);

	for (var i = 100; i < 200; i += 1) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100);

		if (i % 10 == 0) {
			size = sizeXL;
			clabels[(i / 100)] = (max * decimal + startX);
			dlabels[(i / 100)] = (max * decimal + startX);
			cilabels[(i / 100)] = (max - max * decimal + startX);
			draw = true;
		} else if (i % 5 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 1 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			cscale += " M" + (max * decimal + startX) + "," + (startYu)
			cscale += " L" + (max * decimal + startX) + "," + (startYu - size)
			dscale += " M" + (max * decimal + startX) + "," + (startYd)
			dscale += " L" + (max * decimal + startX) + "," + (startYd + size)
			ciscale += " M" + (max - max * decimal + startX) + "," + (startYu)
			ciscale += " L" + (max - max * decimal + startX) + "," + (startYu - size)
		}
	}
	for (var i = 200; i < 400; i += 2) {
		var draw = false
		var size = 0;
		var decimal = Math.log10(i / 100);

		if (i % 100 == 0) {
			size = sizeXL;
			clabels[(i / 100)] = (max * decimal + startX);
			dlabels[(i / 100)] = (max * decimal + startX);
			cilabels[(i / 100)] = (max - max * decimal + startX);
			draw = true;
		} else if (i % 50 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 20 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			cscale += " M" + (max * decimal + startX) + "," + (startYu)
			cscale += " L" + (max * decimal + startX) + "," + (startYu - size)
			dscale += " M" + (max * decimal + startX) + "," + (startYd)
			dscale += " L" + (max * decimal + startX) + "," + (startYd + size)
			ciscale += " M" + (max - max * decimal + startX) + "," + (startYu)
			ciscale += " L" + (max - max * decimal + startX) + "," + (startYu - size)
		}
	}
	for (var i = 400; i < 1005; i += 5) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100);

		if (i % 100 == 0) {
			size = sizeXL;
			clabels[(i / 100)] = (max * decimal + startX);
			dlabels[(i / 100)] = (max * decimal + startX);
			cilabels[(i / 100)] = (max - max * decimal + startX);
			draw = true;
		} else if (i % 50 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 10 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			cscale += " M" + (max * decimal + startX) + "," + (startYu)
			cscale += " L" + (max * decimal + startX) + "," + (startYu - size)
			dscale += " M" + (max * decimal + startX) + "," + (startYd)
			dscale += " L" + (max * decimal + startX) + "," + (startYd + size)
			ciscale += " M" + (max - max * decimal + startX) + "," + (startYu)
			ciscale += " L" + (max - max * decimal + startX) + "," + (startYu - size)
		}
	}
	cscale += `"/>`
	dscale += `"/>`
	ciscale += `"/>`
	for (var key in clabels) {
		var label = key
		var xPosition = clabels[key];
		if (label == 10) {
			label = 1;
		}
		cscale += SVGText(xPosition, sizeXL, label, null, null)
	}
	for (var key in dlabels) {
		var label = key
		var xPosition = dlabels[key];
		if (label == 10) {
			label = 1;
		}
		dscale += SVGText(xPosition, (sizeXL * 2), label, null, null)
	}
	for (var key in cilabels) {
		var label = key
		var xPosition = cilabels[key];
		if (label == 10) {
			label = 1;
		}
		ciscale += SVGText(xPosition, sizeXL, label, null, null)
	}

	//	cscale += `</g>`
	//	dscale += `</g>`
	//	ciscale += `</g>`

	svgParent += cscale
	svgParent += dscale
	svgParent += ciscale
}

function abScale() {
	// A/B scales
	var ascale = ""; //lines up
	var bscale = ""; //lines down
	var alabels = {};
	var blabels = {};

	ascale += SVGGroup("translate(0, " + (spacing * 2 + spacing / 4) + ")");;
	bscale += SVGGroup("translate(0, " + (spacing * 4 + spacing / 4 + slide + sizeS * 2) + ")");;

	ascale += SVGPath("" + strokeWidth + "mm", "black", d);
	var d = ``;
	bscale += SVGPath("" + strokeWidth + "mm", "black", d);
	var d = ``;

	var abPi = Math.log10(Math.PI) / 2;
	var abTau = Math.log10(Math.PI * 2) / 2;

	ascale += " M" + (max * abPi + startX) + "," + (startYu)
	ascale += " L" + (max * abPi + startX) + "," + (startYu - sizeL)
	bscale += " M" + (max * abPi + startX) + "," + (startYd)
	bscale += " L" + (max * abPi + startX) + "," + (startYd + sizeL)

	ascale += " M" + (max * abTau + startX) + "," + (startYu)
	ascale += " L" + (max * abTau + startX) + "," + (startYu - sizeL)
	bscale += " M" + (max * abTau + startX) + "," + (startYd)
	bscale += " L" + (max * abTau + startX) + "," + (startYd + sizeL)

	alabels[piSymbol] = (max * abPi + startX);
	blabels[piSymbol] = (max * abPi + startX);
	alabels[tauSymbol] = (max * abTau + startX);
	blabels[tauSymbol] = (max * abTau + startX);

	for (var i = 100; i < 200; i += 2) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 2;

		if (i % 100 == 0) {
			size = sizeXL;
			alabels[(i / 100)] = (max * decimal + startX);
			blabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 10 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 5 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			ascale += " M" + (max * decimal + startX) + "," + (startYu)
			ascale += " L" + (max * decimal + startX) + "," + (startYu - size)
			bscale += " M" + (max * decimal + startX) + "," + (startYd)
			bscale += " L" + (max * decimal + startX) + "," + (startYd + size)
		}
	}
	for (var i = 200; i < 500; i += 5) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 2;

		if (i % 100 == 0) {
			size = sizeXL;
			alabels[(i / 100)] = (max * decimal + startX);
			blabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 50 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 10 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			ascale += " M" + (max * decimal + startX) + "," + (startYu)
			ascale += " L" + (max * decimal + startX) + "," + (startYu - size)
			bscale += " M" + (max * decimal + startX) + "," + (startYd)
			bscale += " L" + (max * decimal + startX) + "," + (startYd + size)
		}
	}
	for (var i = 500; i < 1000; i += 10) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 2;

		if (i % 100 == 0) {
			size = sizeXL;
			alabels[(i / 100)] = (max * decimal + startX);
			blabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 50 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 20 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			ascale += " M" + (max * decimal + startX) + "," + (startYu)
			ascale += " L" + (max * decimal + startX) + "," + (startYu - size)
			bscale += " M" + (max * decimal + startX) + "," + (startYd)
			bscale += " L" + (max * decimal + startX) + "," + (startYd + size)
		}
	}
	for (var i = 1000; i < 2000; i += 20) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 2;

		if (i % 1000 == 0) {
			size = sizeXL;
			alabels[(i / 100)] = (max * decimal + startX);
			blabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 100 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 50 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			ascale += " M" + (max * decimal + startX) + "," + (startYu)
			ascale += " L" + (max * decimal + startX) + "," + (startYu - size)
			bscale += " M" + (max * decimal + startX) + "," + (startYd)
			bscale += " L" + (max * decimal + startX) + "," + (startYd + size)
		}
	}
	for (var i = 2000; i < 5000; i += 50) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 2;

		if (i % 1000 == 0) {
			size = sizeXL;
			alabels[(i / 100)] = (max * decimal + startX);
			blabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 500 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 100 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			ascale += " M" + (max * decimal + startX) + "," + (startYu)
			ascale += " L" + (max * decimal + startX) + "," + (startYu - size)
			bscale += " M" + (max * decimal + startX) + "," + (startYd)
			bscale += " L" + (max * decimal + startX) + "," + (startYd + size)
		}
	}
	for (var i = 5000; i < 10100; i += 100) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 2;

		if (i % 1000 == 0) {
			size = sizeXL;
			alabels[(i / 100)] = (max * decimal + startX);
			blabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 500 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 200 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			ascale += " M" + (max * decimal + startX) + "," + (startYu)
			ascale += " L" + (max * decimal + startX) + "," + (startYu - size)
			bscale += " M" + (max * decimal + startX) + "," + (startYd)
			bscale += " L" + (max * decimal + startX) + "," + (startYd + size)
		}
	}
	ascale += `"/>`
	bscale += `"/>`

	for (var key in alabels) {
		var label = 0;
		var xPosition = alabels[key];
		if (key >= 100) {
			label = key / 100
		} else if (key >= 10) {
			label = key / 10
		} else {
			label = key;
		}
		ascale += SVGText(xPosition, sizeXL, label, null, null)
	}
	for (var key in blabels) {
		var label = 0
		var xPosition = blabels[key];
		if (key >= 100) {
			label = key / 100
		} else if (key >= 10) {
			label = key / 10
		} else {
			label = key;
		}
		bscale += SVGText(xPosition, (sizeXL * 2), label, null, null)
	}

	//	ascale += `</g>`
	//	bscale += `</g>`

	svgParent += ascale
	svgParent += bscale
}

function kScale() {
	var lscale = ""; //lines down
	var llabels = {};

	lscale += SVGGroup("translate(0, " + (spacing * 15 + slide * 2 + sizeS) + ");");

	lscale += SVGPath("" + strokeWidth + "mm", "black", d);
	var d = ``;
	for (var i = 0; i < 1001; i += 2) {
		var draw = false;
		var size = 0;
		var decimal = i / 1000;
		if (i % 100 == 0) {
			size = sizeXL;
			llabels[decimal] = (max * decimal + startX);
			draw = true;
		} else if (i % 50 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 10 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			lscale += " M" + (max * decimal + startX) + "," + (startYd)
			lscale += " L" + (max * decimal + startX) + "," + (startYd + size)
		}
	}
	lscale += `"/>`
	for (var key in llabels) {
		var label = key
		var xPosition = llabels[key];
		if (label == 10) {
			label = 1
		} else {
			label = (key + "").replace("0.", ".")
		}
		lscale += SVGText(xPosition, (sizeXL * 2), label, null, null)
	}

	//	lscale += `</g>`

	svgParent += lscale

	var kscale = ""; //lines up
	var klabels = {};

	kscale += SVGGroup(`translate(0, 0)`);;

	kscale += SVGPath("" + strokeWidth + "mm", "black", d);
	var d = ``;
	// 1, .02
	for (var i = 100; i < 200; i += 2) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 100 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 20 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 2-3, .05
	for (var i = 200; i < 400; i += 5) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 100 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 20 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 4-9, .1
	for (var i = 400; i < 1000; i += 10) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 100 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 50 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 10-19, .2
	for (var i = 1000; i < 2000; i += 20) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 1000 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 200 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 20-39, .5
	for (var i = 2000; i < 4000; i += 50) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 1000 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 200 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 40-99, 1
	for (var i = 4000; i < 10000; i += 100) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 1000 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 500 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 100-198, 2
	for (var i = 10000; i < 20000; i += 200) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 10000 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 1000 == 0) {
			size = sizeL;
			draw = true;
		} else if (i % 500 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 200-395, 5
	for (var i = 20000; i < 40000; i += 500) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 10000 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 2000 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	// 400-1000, 10
	for (var i = 40000; i <= 100000; i += 1000) {
		var draw = false;
		var size = 0;
		var decimal = Math.log10(i / 100) / 3;

		if (i % 10000 == 0) {
			size = sizeXL;
			klabels[(i / 100)] = (max * decimal + startX);
			draw = true;
		} else if (i % 2000 == 0) {
			size = sizeM;
			draw = rule.precision === PRECISION_MEDIUM || rule.precision === PRECISION_FINE;
		} else {
			size = sizeS;
			draw = rule.precision === PRECISION_FINE;
		}

		if (draw) {
			kscale += " M" + (max * decimal + startX) + "," + (startYu)
			kscale += " L" + (max * decimal + startX) + "," + (startYu - size)
		}
	}
	kscale += `"/>`
	for (var key in klabels) {
		var label = 0;
		if (key >= 1000) {
			label = key / 1000
		} else if (key >= 100) {
			label = key / 100
		} else if (key >= 10) {
			label = key / 10
		} else {
			label = key;
		}
		var xPosition = klabels[key];

		kscale += SVGText(xPosition, sizeXL, label, null, null)
	}

	//	kscale += `</g>`

	svgParent += kscale
}
svgParent += `</svg>`

return svgParent;