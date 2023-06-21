
const date=new Date();
const today=date.getDate();
console.log(today);
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getTimezoneOffset());
console.log(date.getMonth());

const date1=new Date('1971-03-26');
const date2=new Date('1971-12-16');

if(date1.getTime() < date2.getTime()){
    console.log('March was before december');
}
else{
    console.log('March was before december');
}














