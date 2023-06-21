
        //withdraw button
        document.getElementById('withdraw').addEventListener('click',function(){
            const get=document.getElementById('wiin');
            const getWithdraw=get.value;
            const getWithdrawValue=parseFloat(getWithdraw);

           //convert withdraw to number
           const initialWithdraw=document.getElementById('initial-withdraw');
          const withD=initialWithdraw.innerText;
          const preWithdraw=parseFloat(withD);

          const initialBalance=document.getElementById('initial-balance');
         const bal=initialBalance.innerText;
         const preBalance=parseFloat(bal);
 
         get.value='';

         //validity check is it a number??
         if(isNaN(getWithdrawValue)){
            alert("provide a number");
            return;
         }

          if(getWithdrawValue>preBalance){
            alert("Insufficient balance");
           // return; //also use return 
          }
          else{
            const total=getWithdrawValue+preWithdraw;
            initialWithdraw.innerText=total;

            const newTotalBalance=preBalance-total;
            initialBalance.innerText=newTotalBalance;
          }




        

        })





        //deposit button
        document.getElementById('deposit').addEventListener('click',function(){
           //get input field value
            const getDeposit=document.getElementById('din');
            const getDepositValue=getDeposit.value;
            const newAmount=parseFloat(getDepositValue);

             //clear all field
            getDeposit.value='' ;
   
           //get inner text and convert string into number
           const initialDeposit=document.getElementById('initial-deposit');
           const dep=initialDeposit.innerText;
           const preDeposit=parseFloat(dep);            

           const initialBalance=document.getElementById('initial-balance');
           const bal=initialBalance.innerText;
           const preBalance=parseFloat(bal);
 



         //add to the deposite amount
           const newDepositValue=newAmount+preDeposit;
           initialDeposit.innerText=newDepositValue;

         //add to the total balance
           const total=preBalance+newAmount;
           initialBalance.innerText=total;



 

        })
