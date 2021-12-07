
// advanced  function deposit and withdraw input
function getInputValue(inputId) {
 const inputField = document.getElementById(inputId);
 const inputAmountText = inputField.value;
 const amountValue = parseFloat(inputAmountText); 
   // clear input 
   inputField.value = '';

   return amountValue;
}


// advanced  function deposit and withdraw total

function updateTotalField(totalFieldId, amount) {
  const  totalField = document.getElementById(totalFieldId);
  const totalFieldText = totalField.innerText;
  const preTotal  = parseFloat(totalFieldText)
  totalField.innerText = preTotal + amount; 
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const preBalanceTotal = parseFloat(balanceTotalText);
  return preBalanceTotal; 
}


// advanced  function Balance Total

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');


  const preBalanceTotal = getCurrentBalance();

  if (isAdd == true) {
  balanceTotal.innerText = preBalanceTotal + amount;
 }
  else{
  balanceTotal.innerText = preBalanceTotal - amount;
 }
}



document.getElementById('deposit-btn').addEventListener('click', function () {



 const depositAmount = getInputValue('deposit-input');
 if (depositAmount > 0) {
  updateTotalField('deposit-total' , depositAmount);
  updateBalance(depositAmount , true);  
 }

});



// Withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
  
  const withdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTotalField('withdraw-total' , withdrawAmount);
  updateBalance(withdrawAmount , false);
  }
  if (withdrawAmount > currentBalance) {
    console.log(alert("Balance Error. Try Again"));
  }

});




