


function makeRed(){
    document.body.style.color='red';
}

 
const makeblue=document.getElementById('blue');
makeblue.onclick=makeBlue;
function makeBlue(){
    document.body.style.color='blue';
}

 
const makePurple=document.getElementById('purple');
makePurple.onclick=function makepurple(){
    document.body.style.color='purple';
}

//one way
const makePink=document.getElementById('pink');
makePink.addEventListener('click',pink);
 function pink(){
    document.body.style.color='pink';
 }

 //another way
 const makeGreen=document.getElementById('green');
makeGreen.addEventListener('click',function green(){
    document.body.style.color='green';
});
 
//final use ..directly use
document.getElementById('orange').addEventListener('click',function(){
    document.body.style.color='orange';
});





document.getElementById('update').addEventListener('click',function(){
    const get=document.getElementById('input');
    const inputText=get.value;
    const p=document.getElementById('text');
    p.innerText=inputText;

    get.value='';//to set the field empty after operation
})