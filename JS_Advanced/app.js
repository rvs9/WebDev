/*let firstParagraph = document.createElement("p");
firstParagraph.textContent = "this is the first paragraph";

document.body.append(firstParagraph);

let anchor = document.createElement("a");
anchor.textContent = "click here";
anchor.href = "https://www.google.com";
firstParagraph.append(anchor);

let h1Element = document.body.children[0];
h1Element.remove()

firstParagraph.innerHTML = 'this is the <a href="https://www.google.com">link<a>to Facebook';*/

let paragraphElement = document.querySelector("p");

function changeText() {
  paragraphElement.textContent = "text changed after click";
  paragraphElement.style.fontSize = "25.0px";
  paragraphElement.style.color = "purple";
  paragraphElement.style.backgroundColor = "aqua";
}

paragraphElement.addEventListener("click", changeText);

let inputElement = document.querySelector('input');

function retrieveUserText() {
    let userText = inputElement.value;
    console.log(userText);
}

inputElement.addEventListener('input',retrieveUserText);