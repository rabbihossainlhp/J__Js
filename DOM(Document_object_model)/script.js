// console.dir(document.body);
// console.log(document.body);
// let pri = document.getElementById("h-one");
// console.dir(pri);

// let four_h = document.getElementsByClassName("h-four");
// console.log(four_h);

// let parah = document.getElementsByTagName("p");
// console.log(parah);


// let element = document.querySelector("p");
// let allelement = document.querySelectorAll("p");
// console.dir(element);
// console.dir(allelement);


// ///NOw we HaVE to read docs for something try by  own...about "TextNonde" "CommentNode" "ElementNode" "Children"


/// try "TextNonde" "CommentNode" "ElementNode" "Children" all from here...


const addTextNode = document.createTextNode("Hlw guys.");
const pp = document.createElement("p");
let res = pp.appendChild(addTextNode);
console.log(res);

/// NOw lets pracctice with function..
//...TextNonde,,,,,,,,,,
function add_something(Text){
    let creatText = document.createTextNode(Text);
    let findEle = document.getElementById("one-H");
    let result = findEle.appendChild(creatText);
    return result;
}

///...CommentNode,,,,,,,,,
const comment = document.createComment("This is type of comment..");
let resu = document.body.appendChild(comment);
console.dir(resu);
console.log(resu);