// for(let i = 1; i<=800; i++){
//     console.log('Ye mera name hain');
// }

// //Another   
// // let count = 0;
// // for(let i = 1; i<101; i++){
// //     count+=i;
// // }
// // console.log(count);
// // console.log('Loop has ended... ')

// // let count = 0;
// // const user = prompt('Enter number:');
// // for(let ii = 1; ii<=user; ii++){
// //     count +=ii;
// // }
// // console.log(count);

// //While loops 
// let i=1; 
// while(i<=5){
//     console.log('New  world');
//     i++;
// }
// //Do-While loop .......................... // If condition true it will be exicute  and condition is false it also exicute only one time//
// let ii = 1;
// do{
//     console.log('Hi');
//     ii++;
// }while(ii<=0);


// //For-of loop__________________________________
// let stri = 'Mirulis';
// let size = 0;
// for(let vari of stri ){
//     console.log(vari );
//     size++;
// }
// console.log('Size of sring',size);


// //For-in loop__________________________________
// //this loop work for object
// let student = {
//     Name : 'Rabbi Hossain',
//     Age : 48,
//     ispass: true
// };

// for(let key in student){
//     console.log(key,'=', student[key]);
// }


//Simple question practice
//print     all even number of 0 to 100

// for(let i = 1; i<=100; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

//__same thing by while loop
// let test = 0;

// while(test<=100){
//     if(test%2===0){
//         console.log(test);
//     }
//     test++
// }

//practice  another defficult
let gues_number = 54;
let gues_user = prompt('Enter te correct number:');

while(gues_user != gues_number){
    gues_user = prompt('You Enterd wrong number: try again!!');
}

console.log('You are win');