

//add class which name is style from css
const p=document.getElementById('class');
p.classList.add('style');
p.classList.add('jewel');
console.log(p.classList);

//remove class
//p.classList.remove('jewel');
console.log(p.classList);

//replace
p.classList.replace('jewel','newClass');


//toggle
p.classList.toggle('style');

//add multiple class
p.classList.add("myStyle", "anotherClass", "thirdClass");

//remove multiple class
p.classList.remove("myStyle", "anotherClass", "thirdClass");

//find length of the class
p.classList.length;