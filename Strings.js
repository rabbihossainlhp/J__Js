//Strings
// let Str = 'Rabbi'
// console.log(Str.length);
// console.log(Str[3]);

//Templet literals
let TLS = `This is new type of string`;
console.log(TLS);

//_____________________________________________

let objectf = {
    name : 'Atiya',
    age : 43
};

let oupt = `Age of ${objectf.name} is ${objectf.age}`;
console.log(oupt);

//

console.log('Rabbi \nHossain');



//Some strings methods

let neww = '      Thequickbreown   ';
let neww2 = 'new string';

//Lower&Uppercase
console.log(neww.toLowerCase());
console.log(neww.toUpperCase());

//Trim
neww = neww.trim();
console.log(neww);

//Slicing
neww = neww.slice(3,7);
console.log(neww);

//Concatanation
neww = neww.concat(neww2);
console.log(neww);


//Replace strings value
let pra = 'Hello world';
pra = pra.replace('w','N');
console.log(pra);

//Char  At(index)
let Char = 'Vip person';
console.log(Char.charAt(5));


//Practice_____you have to generate username from taking user

let user_input = prompt('Drop Your username');
let len = user_input.length;
let return_v   = `@${user_input.toLowerCase()}${len}`;

console.log(return_v);