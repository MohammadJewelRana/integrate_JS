
 
document.getElementById('deposit').addEventListener('click',function(){
  
    //get input field value
    const newDepositAmount=getInputValueById('din');//pass the id to the function

    if(isNaN(newDepositAmount)){
        alert("Enter a value ");
        return;
    }

    //get deposit initial value
    const initialDeposit=getTextValueById('initial-deposit');
    
    //get total balance
    const preTotalBalance=getTextValueById('initial-balance'); 

    //new deposit
    const newDepositTotal=newDepositAmount + initialDeposit;
    setTextElementValueById('initial-deposit',newDepositTotal);//pass id and value

    //new balance
    const newBalance=preTotalBalance+newDepositAmount;
    setTextElementValueById('initial-balance',newBalance);

})