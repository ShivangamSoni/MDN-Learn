// Function: Creates a new Paragraph and appends it to the bottom of html body
function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "You Clicked a Button!";
    document.body.appendChild(para);
}

/*
    1. Get references to all the buttons on the page
    2. Loop through all the buttons and  add a click event listener

    When any button is pressed, the createParagraph() function will be loaded
*/

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
}