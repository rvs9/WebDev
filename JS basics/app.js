/*let age = 24;
let userName = "rajat";
let hobbies = ["read", "write", "sing"];
let job = {
  title: "Developer",
  place: "Bangalore",
  salary: "50000",
};

let adultYears;
function calculateAdultYears() {
  return age - 18;
}

adultYears = calculateAdultYears();
console.log(adultYears);

age = 45;
adultYears = calculateAdultYears();
console.log(adultYears);

function myFunction() {
  document.getElementById("demo").style.fontSize = "25.0px";
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").style.backgroundColor = "Purple";
}

function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "the " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
  return result;
}

console.log(wordBlank("dog", "big", "ran", "quickly"));

var myArray = ["rvs", "shilpz", 78, [[2, "vks", "veena"], 87]];
console.log(myArray);
var best = myArray[3][0][1];
myArray.push(["shiv", 27]);
console.log(best);

function subseven(num) {
  result = num - 7;
  return result;
}

console.log(subseven(19));

function chechIfNotequal(a, b) {
  if (a !== b) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(chechIfNotequal(10, "10"));

function passPositiveEvenNumBelowFifty(val) {
  if (val <= 48 && val >= 0 && val % 2 == 0) {
    return "Valid number";
  }
  return "Not Valid";
}

console.log(passPositiveEvenNumBelowFifty(20));


let totalAge;

function cAY() {
  return ages - 10;
}
ages = 200
alert(cAY())

ages = 300;
alert(cAY())*/

let udemy = {
  course: "webDevelopment",
  cp: 100,
  mainGoals: ["learning", "build", "earn"],
};

//alert(udemy.course)
console.log(udemy.course);
console.log(udemy.cp);
console.log(udemy.mainGoals);
console.log(udemy.mainGoals[1]);

function fetch(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}

let firstElement = fetch(udemy.mainGoals,1)
console.log(firstElement);
console.log(fetch(udemy.mainGoals,0));

console.log(udemy.mainGoals[2].length);