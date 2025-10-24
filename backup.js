var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
var amount = document.getElementById("amount").value;
var incomeelement = document.getElementById("IncomeCounter");
var expenseelement = document.getElementById("ExpenseCounter");
var balanceelement = document.getElementById("Balance");
var amount = document.getElementById("amount").value;
var list = document.getElementById('transaction-list');


function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    // console.log ("Logging in with", username, password);
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        error.style.display = 'none';
        console.log("Logging in with", username, password);
    }
    else {
        error.style.display = 'block';
    }
}
var incElement = document.getElementById("IncomeCounter");
var expElement = document.getElementById("ExpenseCounter");
// function initAmounts() {
//     var amount = document.getElementById("amount").value;
//     if (amount = 0 || amount == "") {
//         alert("Please enter an amount");

//     }
//     else {
//         addTransaction()
//     }
// }
// function addTransaction() {
//     var incElement = document.getElementById("IncomeCounter");
//     var expElement = document.getElementById("ExpenseCounter");
//     var balelement = document.getElementById("Balance");
//     var amount = document.getElementById("amount").value;
//     var incomeString = incElement.innerText
//     var incomeFloat = parseFloat(incomeString);
//     var expString = expElement.innerText
//     var expFloat = parseFloat(expString);
//     var balstring = balelement.innerText
//     var balfloat = parseFloat(balstring);
//     if (amount < 0) {
//         // let Largeexp = expFloat + +  Math.abs(parseFloat(amount));
//         // let formatedexp = formatNumberWithThousands(Largeexp)
//         // expElement.innerText = formatedexp;
//         document.getElementById("amount").value = "";
//     //     console.log("Income:", incomeFloat, "Expense:", expFloat, "Balance:", balfloat);
//     }
//     else {
//         console.log("Income String:", incomeString, "Income Float:", incomeFloat,"Amount Input:", amount);
//         let LargeInc = incomeFloat + +  parseFloat(amount);
//         let formatedInc = formatNumberWithThousands(LargeInc)
//         incElement.innerText = formatedInc;
//         document.getElementById("amount").value = "";
//         console.log("Income:", LargeInc, "Expense:", expFloat, "Balance:", balfloat);

//     }

// }

function addTransaction() {
var sign = amount < 0 ? "expense" : "income";
    var items = document.createElement("tr");
// items.classList.add(sign);
// items.innerHTML = `<td>${document.getElementById("description").value}</td><td>${amount}</td><td><button class='delbtn' onclick='deleteTransaction(this)'>X</button></td>`;
// list.appendChild(items);
console.log("Adding transaction:", sign, amount);

}