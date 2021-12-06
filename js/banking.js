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


// advanced  function Balance Total

function updateBalance(amount, isAdd) {
 const balanceTotal = document.getElementById('balance-total');
 const balanceTotalText = balanceTotal.innerText;
 const preBalanceTotal = parseFloat(balanceTotalText);


 if (isAdd == true) {
  balanceTotal.innerText = preBalanceTotal + amount;
 }
 else{
  balanceTotal.innerText = preBalanceTotal - amount;
 }
}



document.getElementById('deposit-btn').addEventListener('click', function () {
  // const depositInput = document.getElementById('deposit-input');
 //  const depositAmountText = depositInput.value;
 //  const depositAmount = parseFloat(depositAmountText); 


 // get deposit total 
 // const  depositTotal = document.getElementById('deposit-total');
 // const depositTotalText = depositTotal.innerText;
 // const preDepositTOtal  = parseFloat(depositTotalText)
 // depositTotal.innerText = preDepositTOtal + depositAmount;  



  // update balance
 // const balanceTotal = document.getElementById('balance-total');
 // const balanceTotalText = balanceTotal.innerText;
 // const preBalanceTotal = parseFloat(balanceTotalText);
 // balanceTotal.innerText = preBalanceTotal + depositAmount;


 const depositAmount = getInputValue('deposit-input');
 if (depositAmount > 0) {
  updateTotalField('deposit-total' , depositAmount);
  updateBalance(depositAmount , true);  
 }

});





// Withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
  

    // get withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const preWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = preWithdrawTotal + withdrawAmount;


    // withdrawInput.value = '';

  // Update Balance after Withdraw
  // const balanceTotal = document.getElementById('balance-total');
  // const balanceTotalText = balanceTotal.innerText;
  // const preBalanceTotal = parseFloat(balanceTotalText);
  // balanceTotal.innerText = preBalanceTotal - withdrawAmount;



  const withdrawAmount = getInputValue('withdraw-input');
  if (withdrawAmount > 0) {
    updateTotalField('withdraw-total' , withdrawAmount);
  updateBalance(withdrawAmount , false);
  }


})


