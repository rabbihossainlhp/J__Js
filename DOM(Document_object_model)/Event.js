let find = document.querySelector(".btn");
// find.onmouseover = (e) => {
//     console.log(e.type);
//     console.log(e.target);
// }

find.addEventListener('click', (info)=>{
    console.log('This button has been clicked ');
    console.log(info.type);
    console.log(info.target);

})

find.addEventListener('click', ()=>{
    console.log('This button has been clicked by 1st method');

})


const remove1 = () =>{
    console.log('This button has been clicked by 2nd method');
};
find.addEventListener('click', remove1);

find.removeEventListener('click', remove1);