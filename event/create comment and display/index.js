

document.getElementById('btn').addEventListener('click',function(){
   //get input text
    const getInputValue=document.getElementById('input');
    const value=getInputValue.value;

    //create p tag element
    const createP=document.createElement('p');
    createP.innerText=value;//set input value to p tag

    //get main container
    const mainContainer=document.getElementById('main');
    mainContainer.appendChild(createP);//push the new p tag

    getInputValue.value='';//empty after operation

})