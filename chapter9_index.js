let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re1);
console.log(re2);

console.log(/abc/.test("abcde"));
// -> true
console.log(/abc/.test("abxde"));
// -> false

console.log(new Date());
// -> here we get the date & time as output

console.log(new Date(2009, 11, 9));
// -> printing whats value we give them

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// -> printing date with time

console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387389600000))

function getDate(string) {
	let [_, month, day, year] = 
		/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
	return new Date(year, month - 1, day);
}
console.log(getDate("1-20-2003"));

console.log("papa".replace("p", "m"));
// -> mama

console.log("papa".replace(/[pp]/, "m"));
// -> mama

console.log("papa".replace(/[pp]/g, "m"));
// -> mama

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Phillip"
	.replace(/(\w+), (\w+)/g, "$2 $1"));
// -> Barbara Liskov
// -> John McCarthy
// -> Phillip Walder

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
	str => str.toUpperCase()));
// the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
	amount = Number(amount) - 1;
	if (amount == 1) {
		// only one left, remove the 's'
	} else if (amount == 0) {
		amount = "no";
	}
	return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// -> no lemon, 1 cabbage, and 100 eggs

function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3"));
// -> 1 + 3


console.log(stripComments("x = 10;	// ten!"));
// -> x = 10
console.log(stripComments("1 /* a *I/+/*I b */ 1"));
// -> 1   1

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// -> _Harry_ is a suspicious character

let anotherName = "dea+hl[]rd";
let anotherText = "This dea+hl[]rd guy is super annoying.";
let escaped = anotherName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let anotherRegexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(anotherText.replace(anotherRegexp, "_$&_"));
// -> This _dea+hl[]rd_ guy is super annoying

console.log("	word".search(/\S/));
// -> 2
console.log("	".search(/\S/));
// -> -1


let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// -> 4
console.log(pattern.lastIndex);
// -> 5

let global = /abc/g;
console.log(global.exec("xyz abc"));
// -> ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"))
// -> null

/*last digit = /\d/g;
console.log(digit.exec("here it is: 1"));
// -> ["1"]
console.log(digit.exec("and how: 1"));
// -> null
*/

let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let anotherMatch;
while (anotherMatch = number.exec(input)) {
	console.log("Found", match[0], "at", anotherMatch.index);
}
// -> Found 3 at 14
// -> Found 42 at 33
// -> Found 88 at 40


function parseINI(string) {
// Start with an object to hold the top-level fields
let result = {};
let section = result;
string.split(/\r?\n/).forEach(line => {
let match;
if (match = line.match(/^(\w+)=(.*)$/)) {
section[match[1]] = match[2];
} else if (match = line.match(/^\[(.*)\]$/)) {
section = result[match[1]] = {};
} else if (!/^\s*(;.*)?$/.test(line)) {
throw new Error("Line '" + line + "' is not valid.");
}
});
return result;
}
console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}


console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>"));
// → true


console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false
console.log(/\p{Alphabetic}/u.test("α"));
// → true
console.log(/\p{Alphabetic}/u.test("!"));
// → falses