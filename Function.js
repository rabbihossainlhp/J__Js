//Define function
function FirstFunction(){
    console.log("Hello");
}

//Call Function
FirstFunction();

//Sum..##
function sum (m,n){
    sm = (m+n);
    return sm;
}

console.log(sum(5,4));


//  Arrow function...
// Modern Js
const summ_arrow = (x,y)=>{
    return x+y;
}
console.log(summ_arrow(5,5)); // You can use this function name as simple reguler variable

//....
let printHello=()=> console.log("Helo");
printHello();


// /*++++++++++++++++++++++++++++++++ practice questions no 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function Detect_vowels (String){
    let count = 0;
    for(let i of String){
        if(i==="A" || 
        i==="E" || 
        i==="O" || 
        i==="I" || 
        i==="U")
        {
            count++;
        }
    }
    console.log(count);
}

Detect_vowels("THEQUI");


//Do the same thing using The Arrow Function
const DETECT_V = (Strings)=>{
    let count = 0;
    for(let i of Strings){
        if(i==="A" || 
        i==="E" || 
        i==="O" || 
        i==="I" || 
        i==="U") 
        {
            count++;
        }
    }console.log(count);
}

DETECT_V("HIgUyes");

//Try   Another new 
function NewSys(anotherOne){
    for(let i = 0; i<=  anotherOne.length; i++){
        if(anotherOne[i]==="A"|| 
        anotherOne[i]==="E" || 
        anotherOne[i]==="I"|| 
        anotherOne[i]==="O"|| 
        anotherOne[i]==="U"|| 
        anotherOne[i]==="a"||
        anotherOne[i]==="e"||
        anotherOne[i]==="i"||
        anotherOne[i]==="o"||
        anotherOne[i]==="u")
        {
            console.log(anotherOne[i]);
        }
    }    
}
const anOne = "THENEWBdsfserereru";
NewSys( anOne);                     //now you can actually the same thing using the arrow_function(=>)

//forEach loop in array
let array = [1,2,3,4,5,6];
array.forEach(function printV(val){
    console.log(val);
})

//Use arrow_function
array.forEach((val,ind,arr)=>{
    console.log(val,ind,arr);
})


// /*++++++++++++++++++++++++++++++++ practice questions no 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
let Num_of_arr = [2,3,4,5,6];
Num_of_arr.forEach(function Square(value){
    console.log(value*value);
})
/*
/
/
/
/
/
/
/
/*/
//Map Method.....
let new_pra = [2,3,4,5];
new_pra.map((val)=>{
    console.log(val);
})

//Create a new array
let new_array = new_pra.map((val)=>{
    return val;
});
console.log(new_array);


//Filter Method...
let an_ar = [2,3,4,5,6,7,8];
console.log(an_ar);

let filter_that =   an_ar.filter(function(val){
    return val%2 !== 0;
})
console.log(filter_that);


//Use the same things using arrow_function...
let filter_th = an_ar.filter((val)=>{
    return val%2 === 0;
})
console.log(filter_th);


//Reduce Method....
let lerge = [2,3,4,5,6,7,8];
let sum_o_ler = lerge.reduce((pre,curr)=>{
    return pre+curr;
})
console.log(sum_o_ler);

//>>>Findout the lergest number from the array
let findout = lerge.reduce((pre,curr)=>{
    return pre>curr? pre:curr;
})
console.log(findout);
//Use the same thing without arrow_func
let finOUT = lerge.reduce(function (pre,cur){
    return pre>cur? pre:cur;
})
console.log(finOUT);



// /*++++++++++++++++++++++++++++++++ practice questions no 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//More interesting Question this is 

let marks = [35,55,85,92,85,48,96,98,90,40,58,80,70,80,82,96,46,85];
console.log(marks);

let output = marks.filter((val)=>{
    return val >= 85;
})
console.log(output);


// /*++++++++++++++++++++++++++++++++ practice questions no 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// This problem is more interest than  previous porblem.........
let arr = [];

let input = prompt("Enter the number");
for(let i = 1; i<=input; i++){
    arr[i-1]=i;
}
console.log(arr);

//Summatrion//
let sume = arr.reduce((pre,cur)=>{
    return pre+cur;
})
console.log(sume);

//Multiplication//
let Mul = arr.reduce((pre,cur)=>{
    return pre*cur;
})
console.log(Mul);