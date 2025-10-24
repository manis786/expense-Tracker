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
var incomecard = +document.getElementById("IncomeCounter");
var expensecard = +document.getElementById("ExpenseCounter");
var transamount = document.getElementById("amount").value;

function initAmounts() {
    var amount = document.getElementById("amount").value;
    var desc = document.getElementById("description").value;
    if (amount = 0 || amount == "" || desc == "") {
        alert("Please enter an amount or description");
        document.getElementById("amount").value = "";
        document.getElementById("description").value = "";

    }
    else {
        addTransaction()
    }

}
function addTransaction() {

    var incElement = document.getElementById("IncomeCounter");
    var expElement = document.getElementById("ExpenseCounter");
    var balelement = document.getElementById("Balance");
    var amount = document.getElementById("amount").value;
    var incomeString = incElement.innerText
    var incomeFloat = parseFloat(incomeString);
    var expString = expElement.innerText
    var expFloat = parseFloat(expString);
    var balstring = balelement.innerText
    var balfloat = parseFloat(balstring);
    var desc = document.getElementById("description").value;
    if (amount < 0) {
        expElement.innerText = expFloat + Math.abs(parseFloat(amount));
        balelement.innerText = incElement.innerText - expElement.innerText;
        // console.log(balelement)
        var ul = document.getElementById("TransData");
        var incomeValue = incElement.innerText;
        var expenseValue = expElement.innerText;
        var descriptionValue = desc;
        var li = document.createElement("li");
        var counter = ul.childElementCount;
        li.className = "transaction-item";
        li.innerHTML = "<div class = 'transaction-item'>" + counter + " " + descriptionValue + " "+ "$" + amount + "<button class='delbtn' onclick='deleteTodo(" + counter + ")'>X</button></div>"
        li.setAttribute("id", counter)
        ul.appendChild(li)
        document.getElementById("amount").value = "";
    }
    else {
        incElement.innerText = incomeFloat + parseFloat(amount);
        console.log("Income String:", incomeString, "Income Float:", incomeFloat, "Amount Input:", amount);
        balelement.innerText = incElement.innerText - expElement.innerText;
        balelement.innerText = incElement.innerText - expElement.innerText;
        // console.log(balelement)
        var ul = document.getElementById("TransData");
        var incomeValue = incElement.innerText;
        var expenseValue = expElement.innerText;
        var descriptionValue = desc;
        var li = document.createElement("li");
        var counter = ul.childElementCount;
        li.className = "transaction-item";
        li.innerHTML = "<div class = 'transaction-item'>" + counter + " " + descriptionValue + " " +"$" + amount + "<button class='delbtn' onclick='deleteTodo(" + counter + ")'>X</button></div>"
        li.setAttribute("id", counter)
        ul.appendChild(li)


        document.getElementById("amount").value = "";

    }

}
function addDataGrid() {
    var incElement = document.getElementById("IncomeCounter");
    var expElement = document.getElementById("ExpenseCounter");
    var desc = document.getElementById("description").value;
    var ul = document.getElementById("TransData");
    var incomeValue = incElement.innerText;
    var expenseValue = expElement.innerText;
    var descriptionValue = desc;
    var li = document.createElement("li");
    var counter = ul.childElementCount;
    li.className = "transaction-item";
    li.innerHTML = "<div class = 'transaction-item'>" + counter + ". " + descriptionValue + " : " + incomeValue + " / " + expenseValue + "</div>";
}

function deleteTodo(id) {
    var li = document.getElementById(id)
    li.remove();
}