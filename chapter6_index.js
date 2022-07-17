let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// -> The rabbit says I'm alive

function speak(line) {
	console.log(`This ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
	"how late it's getting!");
// -> This white rabbit says 'Oh my ears and whiskers,
// how late it's getting!'
hungryRabbit.speak("I could use a carrot right now.")
// The hungry rabbit says 'I could use a carrot right now.'

function normalize() {
	console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// -> [0, 0.4, 0.6]
let empty = {};
console.log(empty.toString);
// -> function toString()..{}
console.log(empty.toString());
// -> [object Object]

let protoRabbit = {
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");
// -> The killer rabbit says 'SKREEE!'

function makeRabbit(type) {
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}
function Rabbit(type) {
	this.type = type;
}

Rabbit.prototype.speak = function(line) {
	console.log(`The ${this.type} rabbit says '${this.kine}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// -> true

class Rabbit_C {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`This ${this.type} rabbit says '${this.line}'`);
	}
}
let killer_Rabbit = new Rabbit_C("killer");
let black_Rabbit = new Rabbit_C("black");

let object = new class {
	getWord() {
		return "hello";
	}
};
console.log(object.getWord());
// -> hello

Rabbit.prototype.teeth = "small";
console.log(killer_Rabbit.teeth);
// -> small
killer_Rabbit.teeth = "long, sharp, and bloody";
console.log(killer_Rabbit.teeth);
// -> long, sharp, and bloody
console.log(black_Rabbit.teeth);
// -> small
console.log(Rabbit.prototype.teeth);
// -> small

let ages = {
	Boris: 39,
	Liang: 22,
	Julia: 62
};
console.log(`Julia is ${ages["Julia"]}`);
// -> Julia is 62
console.log("I Jack's age known?", "Jack" in ages);
// -> Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// Is toString's age known? true

let olds = new Map();
olds.set("Boris", 39);
olds.set("Liang", 22);
olds.set("Julia", 62);
console.log(`Julia is ${olds.get("Julia")}`);
// -> Julia is 62
console.log("Is Jack's age known?", olds.has("Jack"));
// -> Is Jack's age known? false
console.log(olds.has("toString"));
// Is toString's age known? true

Rabbit.prototype.toString = function() {
	return `a ${this.type} rabbit`;
};

console.log(String(black_Rabbit));
// -> a black rabbit

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// -> false
Rabbit.prototype[sym] = 55;
console.log(black_Rabbit[sym]);
// -> 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

let stringObject = {
[toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

class Matrix {
constructor(width, height, element = (x, y) => undefined) {
this.width = width;
this.height = height;
this.content = [];
for (let y = 0; y < height; y++) {
for (let x = 0; x < width; x++) {
this.content[y * width + x] = element(x, y);
}
}
}
get(x, y) {
return this.content[y * this.width + x];
}
set(x, y, value) {
this.content[y * this.width + x] = value;
}
}

class MatrixIterator {
constructor(matrix) {
this.x = 0;
this.y = 0;
this.matrix = matrix;
}
next() {
if (this.y == this.matrix.height) return {done: true};
let value = {x: this.x,
y: this.y,
value: this.matrix.get(this.x, this.y)};
this.x++;
if (this.x == this.matrix.width) {
this.x = 0;
this.y++;
}
return {value, done: false};
}
}

Matrix.prototype[Symbol.iterator] = function() {
return new MatrixIterator(this);
};
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
console.log(x, y, value);
}
// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1


let varyinSize = {
	get size() {
		return Math.floor(Math.random() * 100);
	}
};

console.log(varyinSize.size);
// -> 73
console.log(varyinSize.size);
// -> 49

class Temperature {
constructor(celsius) {
this.celsius = celsius;
}
get fahrenheit() {
return this.celsius * 1.8 + 32;
}
set fahrenheit(value) {
this.celsius = (value - 32) / 1.8;
}
static fromFahrenheit(value) {
return new Temperature((value - 32) / 1.8);
}
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30


/*class SymmetricMatrix extends Matrix_D {
constructor(size, element = (x, y) => undefined) {
super(size, size, (x, y) => {
if (x < y) return element(y, x);
else return element(x, y);
});
}
set(x, y, value) {
super.set(x, y, value);
if (x != y) {
super.set(y, x, value);
}
}
}
let matrix_D = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix_D.get(2, 3));
// → 3,2

*/


