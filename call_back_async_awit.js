console.log("Line 1");
console.log("Line2");


setTimeout(()=>{
    console.log("THsi is your code");
},4000)
  
console.log("Line 3");
console.log("line4");

let promise = new Promise((resolve,reject)=>{
    console.log("This is promise");
    reject("cancel");
})


//////////////////////////////////////////////////////////////////////////
//promise handling

let promise2 = ()=>{
    return new Promise ((resolve,reject)=>{
        console.log("This is new promise");
        reject("undone");
    });
};

let variable = promise2();
variable.then((res)=>{
    console.log("fulfilled");
});

variable.catch((error)=>{
    console.log("unavailable");
})


//Try another new

function asyncFunction (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("All data here");
            resolve("SuccessFull");
        },3000);
    });
};


function asyncFunction2 (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data  here");
            resolve("Success");
        },3000);
    });
};


console.log("Getting Data1....");
let access = asyncFunction();
access.then((res)=>{
    console.log(res);
    console.log("Getting Data 2....")
    let access2 = asyncFunction2();
    access2.then((res)=>{

    })
})                                     //you can do this without store thsi Promise in any variable





 //async-awite

function api (data) {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data here",data);
            resolve(200);
        },4000);
    });
}


async function getWeatherData (){ 
    console.log("gettin data 1...");
    await api(1);
    console.log("getting data 2...");
    await api(2);
}


(async function  (){ 
    console.log("gettin data 1...");
    await api(1);
    console.log("getting data 2...");
    await api(2);
})();

