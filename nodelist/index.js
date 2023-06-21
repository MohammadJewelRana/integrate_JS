
//node list
const container=document.getElementById('place-container');
console.log(container.childNodes);//check how many child
console.log(container.firstChild);//which is 1st child
console.log(container.childNodes[3]);//by index
console.log(container.childNodes[3].childNodes);//child er child
console.log(container.childNodes[3].childNodes[2]);//child er child index
console.log(container.childNodes[3].childNodes[3].nextSibling);//child er child index er por k ache
console.log(container.childNodes[3].childNodes[2].previousSibling);//child er child index er age k ache

//check parent Node
console.log(container.parentNode);//parent
console.log(container.parentNode.parentNode);//parent er parent

//createElement
const li=document.createElement('li');//create tag
li.innerText='Jewel';//set text
container.appendChild(li);//push the element where we want to add


