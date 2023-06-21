//get input field value
function getInputValueById(inputId){
    const inputField=document.getElementById(inputId);//get id
    const inputFieldStringValue=inputField.value;//get value
    const inputDepositValue=parseFloat(inputFieldStringValue);//convert
    inputField.value='';
    return inputDepositValue;
}

//set text field value
function setTextElementValueById(elementId,newValue){
   const textElement=document.getElementById(elementId);
   textElement.innerText=newValue;
}

//get text field value
function getTextValueById(textId){
    const textField=document.getElementById(textId);//get text field id
    const textFieldStringValue=textField.innerText;//get text
    const depositValue=parseFloat(textFieldStringValue);
    return depositValue;
}
