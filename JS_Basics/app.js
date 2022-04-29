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

//NEW THING AFTER THIS

// let udemy = {
//   course: "webDevelopment",
//   cp: 100,
//   mainGoals: ["learning", "build", "earn"],
// };

// //alert(udemy.course)
// console.log(udemy.course);
// console.log(udemy.cp);
// console.log(udemy.mainGoals);
// console.log(udemy.mainGoals[1]);

// function fetch(array, arrayIndex) {
//   let arrayElement = array[arrayIndex];
//   return arrayElement;
// }

// let firstElement = fetch(udemy.mainGoals,1)
// console.log(firstElement);
// console.log(fetch(udemy.mainGoals,0));

// console.log(udemy.mainGoals[2].length);

let course = {
  name: "WebDev",
  fee: 999,
  Maingoals: ["abc", "def", "ghi"],
};
let tech = ["REACT", "JS", "CSS"];

function getListItem(array, index) {
  return array[index];
  //return goal;
}

let accessedGoal = getListItem(tech, 2);
console.log(accessedGoal);

document.body.children[3].children[0].href = "https://www.google.com";

let newElement = document.createElement("a");
newElement.textContent = "naya link hai";
newElement.href = "https://www.youtube.com";
let subTitle = document.querySelector("h2");
subTitle.append(newElement);

//document.querySelector('h2').append(document.createElement('a'))

subTitle.innerHTML =
  'made new element again but with <a href="https://www.facebook.com"> inner Html wala link</a>';

//adding an Event listner

let title = document.querySelector("h1");

title.addEventListener("click", changeText);
//title.addEventListener("dblclick", changeTextAgain);

function changeTextAgain() {
  //title.changeText = "welcome back!";
  alert("welcome");
}
function changeText() {
  title.textContent = "Bye there!";
  alert("welcome");
}

//recording the user input with Input Event

let InputElement = document.getElementById("product-name");
let charCount = document.getElementById("remaining-chars");

function recordUserInput(event) {
  let userText = event.target.value;
  let userTextLength = userText.length;
  let remainingChars = 60 - userTextLength;
  charCount.textContent = remainingChars;
  if (remainingChars <=51) {
    InputElement.style.backgroundColor = "pink";
  }else{
    InputElement.style.backgroundColor = "white";
  }
  
  console.log(userText);
}

InputElement.addEventListener("input", recordUserInput);
