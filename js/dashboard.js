const logoutButton = document.getElementById('logout_button')
const depositButton = document.getElementById('deposit_button')
const withdrawButton = document.getElementById('withdraw_button')

//get input value
const depositAmountField = document.getElementById('deposit_money_field')
const withDrawAmountField = document.getElementById('withdraw_money_field')

//total value 
let totalDeposit = document.getElementById('deposit_total')
let totalBalance = document.getElementById('balance_total')
let totalWithDraw = document.getElementById('withdraw_total')

//logout
logoutButton.addEventListener('click',() => {
    window.location.href="index.html"
})

//deposit
depositButton.addEventListener('click',() => {
    const newdepositValue = depositAmountField.value

    //set new deposit value
    const previousDeposit = totalDeposit.innerText
    const currentDepositAmount = parseFloat(previousDeposit) + parseFloat(newdepositValue)
    totalDeposit.innerText = currentDepositAmount

    //setT total balance value
    const previousBalance = totalBalance.innerText
    const currentBalance = parseFloat(previousBalance) + parseFloat(newdepositValue)
    totalBalance.innerText = currentBalance
    depositAmountField.value = ' '
})

//withdraw 
withdrawButton.addEventListener('click',() => {
    const newWithDrawValue = withDrawAmountField.value

    //set new withdraw value 
    const previousWithDraw = totalWithDraw.innerText
    const currentWithDrawAmount = parseFloat(previousWithDraw) + parseFloat(newWithDrawValue)
    totalWithDraw.innerText = currentWithDrawAmount
    withDrawAmountField.value = ' '

    //update total balance
    const previousBalance2 = totalBalance.innerText
    const currentBalance2 = parseFloat(previousBalance2) - parseFloat(currentWithDrawAmount)
    totalBalance.innerText = currentBalance2
})