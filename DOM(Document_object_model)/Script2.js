let first = document.querySelector("h2");
// let add = document.createTextNode("Hamari sb");
// first.appendChild(add);

first.innerText = first.innerText+" This is another part of inner";

let allDives = document.querySelectorAll(".bo_");
console.dir(allDives);



let ind = 1;
for(Divs of allDives){
    Divs.innerText = `Newline${ind}`;
    ind++;
}