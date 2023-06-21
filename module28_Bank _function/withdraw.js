
document.getElementById('withdraw').addEventListener('click',function(){

    //get input field value
    const withdrawAmount=getInputValueById('wiin');

    if(isNaN(withdrawAmount)){
        alert("Enter a value ");
        return;
    }

    //get previous withdraw balance
    const preWithDraw=getTextValueById('initial-withdraw');

    if(withdrawAmount>preWithDraw){
        alert("insufficient balance");
        return;
    }

    //get previous total amount
    const preAmount=getTextValueById('initial-balance');

    //new withdraw total
    const withDrawTotal=withdrawAmount+preWithDraw;
    setTextElementValueById('initial-withdraw',withDrawTotal);

    //new total amount
    const newBalance=preAmount-withdrawAmount;
    setTextElementValueById('initial-balance',newBalance);


})