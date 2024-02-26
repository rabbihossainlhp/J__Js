//Conditional Statement 

// let Age = 34;

// if (Age>18){
//     console.log("You can not give the vote");
// }

let Mode = 'Dark';
let color;

if ( Mode == 'Dark'){
    color = 'Light';
}
if( Mode== 'Light'){
    color = 'Dark';
}

console.log(color);

if(Mode=='Light'){
    console.log(color = 'Dark');
} else{
    console.log(color = 'Light');
}

//Find the odd and even number
let vari = 54;
if(vari%2 != 0){
    console.log('The number is ODD');
}else{
    console.log('The number is EVEN');
}

//else-if statement
if (vari<80){
    console.log('You are joniour');
}else if(vari>80){
    console.log('you are old');
}else{
    console.log('you are middle mean 80');
}

//Ternary operator
let res = vari<70? 'joniour':'seniour';
console.log(res);


/////Practice some simple QUESTION


// let input = prompt('Enter Your Name:');
// console.log(input);

// let verif = prompt('Enter a number');
// if (verif%5 ===0){
//     console.log(verif,'The Number is multiple by 5');
// }else{
//     console.log(verif,'The number is not multiplied by 5');
// }


//Decide for Grade of a student
let Marks = prompt('Enter number of ur Child');

if(Marks>=80 && Marks<=100){
    console.log('The Grade is A+');
}else if(Marks>=60 && Marks<=79){
    console.log('The Grade is A');
}else if ( Marks>=40 && Marks<=59){
    console.log('The Grade is A-');
}else if(Marks >= 33 && Marks<=39){
    console.log('You passed only');
}else{
    console.log('You not passed yet');
}


/*
.
.
.
.
.
.
.
.
.
.
.
.
. */

//This is only repeation of previous lesson
//+++++++++++++++++++++++++++++++++++++++++++++++
// Calculate the Grade of A Student
//+++++++++++++++++++++++++++++++++++++++++++++++

const user_marks = prompt('Enter Marks for Seeing the Grade:');
if(user_marks<33){
    console.log('You are not pass yet!!');
}else if(user_marks>=33 && user_marks<=40){
    console.log('The Grade is C');
}else if(user_marks>=41 && user_marks<=50){
    console.log('The Grade is B-');
}else if(user_marks>=51 && user_marks<=60){
    console.log('The Grade is B ');
}else if(user_marks>=61 && user_marks<=70){
    console.log('The Grade is A-');
}else if(user_marks>=71 && user_marks<=80){
    console.log('The Grade is A');
}else if(user_marks>=81 && user_marks<=100){
    console.log('The Grade is A+');
}else{
    console.log('Make sure about your INPUT TYPE');
}