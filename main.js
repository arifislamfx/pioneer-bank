// login button event handler
var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function (e) {
  const mainPage = document.getElementById("login__area");
  mainPage.style.display = "none";
  const transaction = document.getElementById("transaction__area");
  transaction.style.display = "block";
});

//deposit button event handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  // const depositAmount = document.getElementById('depositAmount').value;
  // const depositNum = parseFloat(depositAmount);
  const depositNum = getInputNumber("depositAmount");

  // const currentDeposit = document.getElementById('currentDeposit').innerText;
  // const newDepositNum = parseFloat(currentDeposit);
  // const totalDeposit = depositNum + newDepositNum;
  // document.getElementById('currentDeposit').innerText = totalDeposit;

  //Balance update
  // const currentBalance = document.getElementById('currentBalance').innerText;
  // const currentBalanceNum = parseFloat(currentBalance);
  // const totalBalance = depositNum + currentBalanceNum;
  // document.getElementById('currentBalance').innerText = totalBalance;
  updateSpanText("currentDeposit", depositNum);
  updateSpanText("currentBalance", depositNum);

  document.getElementById("depositAmount").value = "";
});
function updateSpanText(id, depositNum) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = depositNum + currentNumber;
  document.getElementById(id).innerText = total;
}

//Withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
