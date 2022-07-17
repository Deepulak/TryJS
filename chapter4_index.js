let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// -> 5
console.log(listOfNumbers[0]);
// -> 2
console.log(listOfNumbers[2 - 1]);
// -> 3
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// -> function
console.log(doh.toUpperCase());
// -> DOH 
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(6);
console.log(sequence);
// -> [1, 2, 3, 4, 6]
sequence.pop(6);
console.log(sequence);
let day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> undefined
day1.wolf = false;
console.log(day1.wolf);
// -> false
let descriptions = {
	work: "Went to work",
	"touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left);
// -> 1
delete anObject.left;
console.log(anObject.left);
// -> undefined
console.log("left" in anObject);
// -> false
console.log("right" in anObject);
// -> true
let journal2 = [
{events: ["work", "touched tree", "pizza",
"running", "television"],
squirrel: false},
{events: ["work", "ice cream", "cauliflower",
"lasagna", "touched tree", "brushed teeth"],
squirrel: false},
{events: ["weekend", "cycling", "break", "peanuts",
"beer"],
squirrel: true},
/* and so on ... */
];
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// -> true
console.log(object1 == object3);
// -> false
object1.value = 15;
console.log(object2.value);
// -> 15
console.log(object3.value);
// 10
let journal = [];
function addEntry(events, squirrel) {
	journal.push({events, squirrel});
} 

addEntry(["work", "touched tree", "pizza", "running",
	"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
	"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
	"beer"], true);

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) *
			(table[0] + table[1]) *
			(table[1] + table[3]) *
			(table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// -> 0.068599434

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}

console.log(tableFor("pizza", journal));
// -> [76, 9, 4, 1]

function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}
console.log(max(4, 1, 9, -2));
// -> 9

function randomPointOnCircle(radius) {
	let angle = Math.random() * 2 * Math.PI;
	return {x: radius * Math.cos(angle),
		y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));
// -> {x: 0.3667, y: 1.966}
console.log(Math.random(2));
// -> 0.36
