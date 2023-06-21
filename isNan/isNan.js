
//is it number??
const num='23';
if(typeof num==='number'){
    console.log('Number');
}
else{
    console.log('Not number');
}

//array check
const arr=[3,5,6,7];
console.log(typeof arr);//output object
console.log(Array.isArray(arr));//output::true

//isNaN()  :::is not a number
//eta number na erkom condition dey

console.log(isNaN('2')); //false:: bcz eta number
console.log(isNaN('cdssg'));//true:::because eta number na



