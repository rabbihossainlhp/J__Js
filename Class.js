class FirsrClass {
    constructor(brand){
        console.log("creating new Class");
        this.brand = brand
    }
    fullName(){
        console.log("This is new");
    }
    
    setBrand(brand){
        this.nameOFbrand = brand;
    }
}

let FClass = new FirsrClass();


class Parent {
    hello(){
        console.log("hello world");
    }
}

class child extends Parent{

}

let childClass = new child();




//this is part of inharitance

class person {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class doctor extends person{
    constructor(name){
        super(name);
        this.name = name    
    }
    work(){
        console.log("treat patient");
    }
}

let DCTR = new doctor("atel");


//////////////////////////////////////////////////////////////////////////////////
//lets practice solve questions
let data = `This is secret data here`;

class user{
    constructor(name,mail){
        this.name = name;
        this.email = mail;
    }
    viewData(){
        console.log("Data =", data);
    }
}

let student1 = new user("hasin","hasin@gmail.com");
let student2 = new user("mahdi","mahadi32@gmail.com");



//lets practice one more question...

class Admin extends user{
    constructor(name,mail){
        super(name,mail);
    }
    editData(){
        data = "Here some new data";
    }
}

let admin1 = new Admin("admin1","college@gmail.com");

