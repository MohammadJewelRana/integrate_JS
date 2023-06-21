
//where to add
const container=document.getElementById('places-list');
//createElement
const li=document.createElement('li');//create tag
li.innerText='Jewel';//set text
container.appendChild(li);//push the element where we want to add


//where to add
const mainContainer=document.getElementById('main-container');

//create
const sec=document.createElement('section');//section create

 const h1=document.createElement('h1');//create heading tag
 h1.innerText="My food list";//set text
 sec.appendChild(h1);//push h1 text to the sec

 //create ul and li
 const ul=document.createElement('ul');
  const li1=document.createElement('li');
  li1.innerText="Beef";
  ul.appendChild(li1);
  const li2=document.createElement('li');
  li2.innerText="Chicken";
 
  //push li to ul
 ul.appendChild(li1);
 ul.appendChild(li2);

//push ul to section
 sec.appendChild(ul);

 //push section to the container
 mainContainer.appendChild(sec);



//another way
//set innerHtml directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML= `
        <h1>My dress section</h1>
        <ul>
            <li>Shirt</li>
            <li>Jeans</li>
            <li>Shoes</li>
        </ul>
    `
mainContainer.appendChild(sectionDress);