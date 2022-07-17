//let theNumber = Number(prompt("Pick a number"));
//console.log("Your number is the square root of " + 
//	theNumber * theNumber)

// Conditionat Execution
//let theNumber = Number(prompt("Pick a number"));
//if (!Number.isNaN(theNumber)) {
//	console.log("Your number is the sqaure root of " +
//		theNumber * theNumber);
//} else {
//	console.log("Hey. Why didn't you give me a number?")
//}

let num = Number(prompt("Pick a number"));

if (num < 10) {
	console.log("Small");
} else if (num < 100) {
	console.log("Medium");
} else {
	console.log("Large");
}


// While Loop
let number = 0;
while (number <= 12) {
	console.log(number);
	number = number + 2;
}

// snipet
let result = 1;
let counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}
console.log(result)


// Do Loop
let yourName;
do {
	yourName = prompt("Who you are?");
} while (!yourName);
console.log(yourName)

// For Loops
for (let number = 0; number <= 12; number = number + 2) {
	console.log(number);
}

// Braking out a Loop
for (let current = 20;  ; current = current + 2) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}

// Switch Case
switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly");
		break;
	case "cloudy":
		console.log("Go outside");
		break;
	default:
		console.log("Unknown weather type!");
		break;
}