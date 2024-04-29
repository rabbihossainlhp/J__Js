

let select = document.querySelector('#button');
let mood = 'light';

// select.addEventListener('click', ()=>{
//     if (mood==='light'){
//         mood = 'dark';
//         document.querySelector('body').style.backgroundColor = 'black';
//     }  else{
//         mood='light';
//         document.querySelector('body').style.backgroundColor = 'white';
//     }

// });

select.addEventListener('click',()=>{
    let currColor = document.body.style.backgroundColor;
    if (currColor === 'white'){
        document.body.style.backgroundColor = 'black';
    }else{
        document.body.style.backgroundColor = 'white';
    }
});                                                        //I think this methode is much more easiar than others to change the background colro::::



// let newTheam = document.querySelector('.team');

// newTheam.addEventListener('click', ()=>{
//     let newTheam2 = document.querySelector('.team').style.;
//     if(newTheam2=== 'black'){
//         newTheam2 === 'white';
//     }
// } )

let newTeam = document.querySelector('.team');
let access = document.querySelector('.box_design');

newTeam.addEventListener('click', () => {
    let currentColor = newTeam.style.color;
    let cuRaccess = access.style.backgroundColor;
    if (currentColor === 'black') {
        newTeam.style.color = 'white';
        document.querySelector('.box_design').style.backgroundColor = 'black';
        document.querySelector('p').style.color = 'white';
    } else {
        newTeam.style.color = 'black';
        document.querySelector('.box_design').style.backgroundColor = 'snow';
        document.querySelector('p').style.color = 'black';
    }
});
