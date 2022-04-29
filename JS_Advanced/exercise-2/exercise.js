// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

let firstButton = document.querySelector("button");
//    - Select the second button by using an "id"

let secondButton = document.getElementById("button2");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored

function functionOne() {
  console.dir(firstButton);
}

firstButton.addEventListener("click", functionOne);

//    - Output the second button WITHOUT using the variable in which it's stored

function functionTwo(event) {
  console.dir(event.target);
}

secondButton.addEventListener("click", functionTwo);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

let p1 = document.body.children[2].children[1];
let p3 = document.body.children[2].children[3];

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function firstBfunction() {
  p3.remove();
}
firstButton.addEventListener("click", firstBfunction);

//    - The second button changes the background color of the first paragraph to blue

function secondBFunction() {
  //p1.style.backgroundColor = "blue";
  p1.classList.add('class-color');
}
secondButton.addEventListener("click", secondBFunction);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

