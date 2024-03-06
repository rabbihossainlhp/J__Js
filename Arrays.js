//_______Arrays

const marks = [75,43,34,78,66,90];
console.log(marks.length);

let country = ["bd","in","pak","in","pak","in","pak","in","pak","in","pak"];
console.log(country);

//print array using for loop
for(let i = 0; i<=country.length; i++){
    console.log(country[i]);
}

console.log('Another');

//now using for-of loop
for (let elem of country){
    console.log(elem);
}

//  Anoter new
console.log('NewLine');

//now we will use for-in loops
for(let elem in country){
    console.log(country[elem]);
}


/*++++++++++++++++++++++++++++++++ practice questions no 1 +++++++++++++++++++++++++++++++++++++++++++++ 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let new_marks = [23,53,43,65,88];
let sum = 0;
let aver = new_marks.length;

for(let i of new_marks){
    sum += i;
}
console.log(sum/aver);  //just simple problem this was


console.log('NewLine');
/*++++++++++++++++++++++++++++++++ practice questions no 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//Use for-of loop
let price = [390,445,677,126];
let index = 0;
for(let val of price){
    let off = val/10;
    let new_price = val-off;
    console.log(`Before 10%OFF value was ${index} = ${val}`);
    console.log(`After 10%OFF value is ${index} = ${new_price}`);
    index++;
}

console.log('Another new line');

//Use only for loop
for(let i = 0; i<price.length; i++){
    let oFF = price[i]/10;
    let A_oFF = price[i]-oFF;
    console.log(`Before 10%OFF value was ${i} = ${price[i]}`);
    console.log(`After 10%OFF value is ${i} = ${A_oFF}`);      //It was also easy...

}



//Some metode of Arrays
//Add something 

let mcountry = ["BD","UK"];
mcountry.push("IND","RUS");
console.log(mcountry);

//Delete Something
mcountry.pop();
console.log(mcountry);

//Showing Deleted Item from arrys
let S_D = mcountry.pop();
console.log("Deleted item is =",S_D);

//toString method..
let anoterNew = ["mango","apple","jackfruite"];
console.log(anoterNew.toString());

//Concatanation
let firstE = ["Asia","Urope"];
let secondE = ["Africa","  America"];
console.log(firstE.concat(secondE));

//Unshift & Shift 
let exa = [1971,2000,2006,2019];
let res1 = exa.unshift("2013");
let res2 = exa.shift();
console.log(res1);
console.log(`Unshift(Add) = ${res1}  and Shift(Deleted) = ${res2}`);

//Slice...
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.slice(2,5));

//Splice...
let anrr = [1,2,3,4,5,6,7,8,9];
console.log(anrr.splice(2,1,9));




// /*++++++++++++++++++++++++++++++++ practice questions no 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let Company = ["Pathao","Uber","Evali","Daraz"];
console.log(Company);

//Add in start...
let add = Company.unshift("Walmart");
console.log(add);
console.log(Company);

//Remove from end...
let Rem = Company.pop();
console.log(Rem);
console.log(Company);

//Remove&Add...
let RE_AD = Company.splice(2,1,"Google");
console.log(Company);

