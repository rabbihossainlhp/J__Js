//___Practice some interesting questions....
//___Create a new button and add this in inside of body as first element

let buttonC = document.createElement("button");
buttonC.innerText = "Click me";
buttonC.style.backgroundColor = "red";
buttonC.style.color = "white";

document.querySelector("body").prepend(buttonC);

//Question 2
let getAcc = document.querySelector("p");
//..getAcc.setAttribute("class","coustom-class"); // by this method actually occour overwrite in here.

//we have to use classlist to solving this overwrite problem...
getAcc.classList.add("coustom-class");