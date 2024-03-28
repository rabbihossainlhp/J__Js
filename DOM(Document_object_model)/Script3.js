let divs = document.querySelectorAll("div");
console.log(divs);

let id = divs[3].getAttribute("name");
console.log(id);

let pragraph = document.querySelectorAll("div");
let paragraph =pragraph[2].getAttribute("class");
console.log(paragraph);

let pragraph2 = document.querySelectorAll("div");
let newC = pragraph2[1].setAttribute("class","No-class");
console.log(newC);


//Lets try to make some style with JS...

let NodeStyle = document.querySelectorAll("div");
console.log(NodeStyle);
NodeStyle[4].style.backgroundColor = "black";
NodeStyle[4].style.borderColor = "green";

NodeStyle[4].style.fontSize = "40px";
NodeStyle[4].innerText = "it was simple trial";


//....Insert new element by creating new elements..

let simpleButton = document.createElement("button");
simpleButton.innerText = "Click to view";

let add = document.querySelectorAll("div");
//add[5].append(simpleButton);
add[5].prepend(simpleButton);

//outside the div ..
//add[5].before(simpleButton);
add[5].after(simpleButton);

let heading = document.createElement("h3");
heading.innerText = "Hlw guys welcome";

add[5].prepend(heading);


// delete something by accesing...
let del = document.querySelector("h2");
del.remove();