function canYouSpotTheProblem() {
	"use strict";
	let counter;
	for (counter = 0; counter < 10; counter++) {
		console.log("Happy Happy");
	}
}

canYouSpotTheProblem();
// -> ReferenceError: counter is not defined

/*function Person(name) {
	this.name = name;
}

let ferdinand = Person("Ferdinand");	// oops
console.log(name);
// -> Ferdinand */

function Person(name) {
	"use strict"
	this.name = name;
}

let ferdinand = new Person("Ferdinand");	// forget new
// -> TypeErrot: Cannot set property 'name' of undefined
/*
function numerToString(n, base = 10) {
	let result = "", sign = "";
	if (n < 0) {
		sign = "-";
		n = -n;
	}
	do {
		result = String(n % base) + result;
		n /= base;
	} while (n > 0);
	return sign + result;
}
console.log(numerToString(13, 10));

function promptNumber(question) {
	let result = Number(prompt(question));
	if (Number.isNaN(result)) return null;
	else return result;
}

console.log(promptNumber("How many trees do you see?"))
*/

/*function lastElement(array) {
	if (array.length == 0) {
		return {failed: true};
	} else {
		return {element: array[array.length - 1]};
	}
}
*/
/*
function promptDirection(question) {
	let answer = prompt(question);
	if (result.toLowerCase() == "left") return "L";
	if (result.toLowerCase() == "right") return "R";
	throw new Error("Invalid direction: " + answer);
}

function look() {
	if (promptDirection("Which way?") == "L") {
		return "a house";
	} else {
		return "two angry bears";
	}
}

try {
	console.log("You see", look());
} catch (error) {
	console.log("Something went wrong: " + error)
}
*/
const accounts = {
	a: 100,
	b: 0,
	c: 20
};

function getAccount() {
	let accountName = prompt("Enter an account name");
	if (!accounts.hasOwnProperty(accountName)) {
		throw new Error(`NO such account: $(accountName`);
	}
	return accountName;
}

function transfer(from, amount) {
	if (account[from] < amount) retrun;
	accounts[from] -= amount;
	accounts[getAccount()] += amount;
}


function transfer(from, amount) {
	if (accounts[from] < amount)  return;
	let progress = 0;
	try {
		accounts[from] -= amount;
		progress = 1;
		accounts[getAccount()] += amount;
		progress = 2;
	} finally {
		if (progress == 1) {
			accounts[from] += amount;
		}
	}
}

