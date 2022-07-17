window.addEventListener("click", () => {
	console.log("You Knocked?");
});

let button = document.querySelector("button");
button.addEventListener("click", () => {
	console.log("Button Clicked.")
});

let button_s = document.querySelector("button");
function once() {
	console.log("Done.");
	button_s.removeEventListener("click", once);
}
button_s.addEventListener("click", once);

let button_t = document.querySelector("button");
button_t.addEventListener("mousedown", event => {
	if (event.button_t == 0) {
		console.log("Left Button");
	}
	else if (event.button_t == 1) {
		console.log("Middle Button");
	}
	else if (event.button_t == 2) {
		console.log("Right Button");
	}
});

let para = document.querySelector("p");
let button_f = document.querySelector("button");
para.addEventListener("mousedown", () => {
	console.log("Handler for paragraph.");
});
button_f.addEventListener("mousedown", event => {
	console.log("Handler for button.");
	if (event.button_f == 2) event.stopPropagation();
});

let bombTimer = setTimeout(() => {
	console.log("BOOM!");
}, 500);
if (Math.random() < 0.5) {
	// 50% chance
	console.log("Defused.");
	clearTimeout(bombTimer);
}