let camelCase;
let UPPER_SNAKE_CASE;
let CapitalCase;

let someText1 = "London";
let someText2 = "capital";
let someText3 = "Britain";

console.log(`${someText1} is the ${someText2} of great ${someText3}`);

let someNumber = 5;
console.log(">>>>>>>>>>>>>>>>>>>", typeof someNumber);
console.log(typeof someNumber.toString());
console.log(typeof Boolean(someNumber));

let someString = "patru";
console.log(">>>>>>>>>>>>>>>>>>>", typeof someString);
console.log(typeof +someString);
console.log(typeof Number(someString));
console.log(typeof Boolean(someString));
console.log(">                                      ");

const flasy1 = "str";
const flasy2 = 0;
const flasy3 = undefined;
const flasy4 = null;
const flasy5 = NaN;

if (flasy1 || flasy2) {
  console.log("one is true");
} else {
  console.log("bouth are false");
}
if (!flasy1 || !flasy3) {
  console.log("one is true");
} else {
  console.log("bouth are false");
}
if (flasy1 || !flasy4) {
  console.log("one is true");
} else {
  console.log("bouth are false");
}
if (flasy1 && flasy5) {
  console.log("both are true");
} else {
  console.log("one is false");
}
if (!flasy1 && flasy2) {
  console.log("both are true");
} else {
  console.log("one is false");
}
