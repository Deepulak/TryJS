const sqaure = function(x) {
	return x * x;
};

console.log(sqaure(12))

const makeNoise = function() {
	console.log("Pling!");
};

makeNoise();
// Pling!

const power = function(base, exponent) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

console.log(power(2, 10));

let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
	// 60
}
// y is not visible here
console.log(x + z);
// 40

const halve = function(n) {
	return n / 2;
};

let n = 10;
console.log(halve(100));
// 50
console.log(n);
// => 10

const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log('${ingredientAmount} ${unit} ${name}');
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};

/*
let launchMissiles = function() {
	missileSystem.launch("now");
};
if (safeMode) {
	launchMissiles = function() {
		// do nothing
	};
}
*/

function greet(who) {
	console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
/*I
function chicken() {
	return egg();
}

function egg() {
	return chicken();
}
console.log(chicken() + " came first.");

// here we get the recursion error
*/

function minus(a, b) {
	if (b === undefined) return -a;
	else return a - b;
}

console.log(minus(10));
// -10
console.log(minus(10, 6));
// 4

function power_po(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base; 
	}
	return result;
}

console.log(power_po(4));
// 16
console.log(power_po(2, 6));
// 64

function multiplier(factor) {
	return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// -> 10

function power_pow(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power_pow(base, exponent - 1);
	}
}
console.log(power_pow(2, 3));

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, '(${history} + 5)') || find (current * 3, '(${history} * 3)');
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));
// -> (((1 * 3) + 5) *3)

function printFarmInventory(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log('${cowString} Cows');
	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log('${chickenString} Chickens');
}

function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = "0" + string;
	}
	return string;
}

function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);