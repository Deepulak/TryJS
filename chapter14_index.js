/*function talksAbout(node, string) {
	if (node.nodeType == Node.ELEMENT_NODE) {
		for (let i = 0; i < node.childNodes.length; i++) {
			if (talksAbout(node.childNodes[i], string)) {
				return true;
			}
		}
		return false;
	}
	else if (node.nodeType == Node.TEXT_NODE) {
	return node.nodeValue.indexOf(string) > -1;
	}	
}
console.log(talksAbout(document.body, "book"));
// -> true 
*/


function replaceImages() {
	let images = document.body.getElementsByTagName("img");
	for (let i = images.length - 1; i >= 0; i--) {
		let image = images[i];
		if (images.alt) {
			let text = document.createTextNode(image.alt);
			image.parentNode.replaceChild(text, image);
		}
	}
}

let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));
// -> ["ONE", "TWO"]


function elt(type, ...children) {
	let node = document.createElement(type);
	for (let child of children) {
		if (typeof child != "string") { node.appendChild(child); }
		else { node.appendChild(document.createTextNode(child)); }
	}
	return node;
}

document.getElementById("quote").appendChild(
	elt("footer", -"",
		elt("strong", "Karl Pooper"),
		", preface to the second edition of ",
			elt("em", "The Open Society and Its Enemies"),
			", 1950"));