const Student = {
    fullName : 'Rabbi Hossain',
    age : 55,
    cgpa : 2.3,
    isPass: true
};
Student['fullName'] = 'Hayat';
console.log(Student.fullName);



/*__________________________________________________________________________

Now we will create some simple obj: for some specific metrls...
____________________________________________________________________________*/



//.... this is one of way to access value & anyother of the OBJECT।
const Laptop = {
    name : 'HP-Pavilon',
    Model: 'Pavilon-HG5',
    year : 2021,
    price: 80000.00
};

console.log(Laptop['Model']);
console.log(Laptop['price']);
console.log(Laptop['name']);

//....this is another way to access the value and other component of this OBJECT {Although both method are correct}

let Speaker = {
    Name : 'MicoroLAB',
    price: 3000.5,
    Model: 'Digital-x 2300',
    year : 2020
};
console.log(Speaker.Model);
console.log(Speaker.Name);
console.log(Speaker.price);