const section=document.querySelectorAll('section');
// console.log(section);
for(const i of section){
    //console.log(i);
    i.style.border="1px solid black";
    i.style.marginBottom="5px";
    i.style.borderRadius='15px';
    i.style.paddingLeft="34px";
}


const fruits=document.getElementById("#classlist");
fruits.classList.add('fruits-clr');







