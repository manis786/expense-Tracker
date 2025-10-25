// var descInput = document.getElementById("description").value || 0;
// var amountInput = document.getElementById("amount").value || 0;
var TransactionHistory = JSON.parse(localStorage.getItem("History")) || [];
var users = JSON.parse(localStorage.getItem("userData")) || [];
console.log(TransactionHistory);
function initAmounts() {
    var descInput = document.getElementById("description").value;
    var amountInput = document.getElementById("amount").value;
    if (!descInput || !amountInput) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields!',
        });
        return;
    }
    console.log("Description: ", descInput), console.log("Amount: ", amountInput);
    saveTrans()
}
function AddTrans() {
    var TransDiv = document.getElementById("transDiv");
    var transBtn = document.getElementById("addBtn1");
    var saveBtn = document.getElementById("addBtn");
    TransDiv.style.display = "block";
    saveBtn.style.display = "block";
    transBtn.style.display = "none";
}
function saveTrans() {
    descInput = document.getElementById("description").value;
    amountInput = document.getElementById("amount").value;
   
    // console.log(TransactionHistory)
    var newTransaction = {
        description: descInput,
        amount: parseFloat(amountInput)
    };
    TransactionHistory.push(newTransaction);
    localStorage.setItem("History", JSON.stringify(TransactionHistory));

var datatab = document.getElementById("transactionList");
var tabdata = document.createElement("tr");
tabdata.innerHTML = "<td>".concat(newTransaction.description, "</td><td>").concat(newTransaction.amount, "</td><td><button>X</button></td>");
datatab.appendChild(tabdata);
}
function signupUser () {
    var users = JSON.parse(localStorage.getItem("userData")) || [];
    var username = document.getElementById("newUsername").value;
    var email = document.getElementById("Newemail").value;
    var password = document.getElementById("newPassword").value;
    var rpassword = document.getElementById("repeatPassword").value;

    if (!username || !email || !password ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields!',
        });
        return;
    }
    if (password !== rpassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!',
        });
        return;
    }
    var id;
    if (users.length == 0) {
      id = 1
    } else {
      id = users[users.length - 1].id + 1
    }
    var newUser = {
        id : id,
        username: username,
        email: email,
        password: password
    };

    TransactionHistory.push(newUser);
    localStorage.setItem("userData", JSON.stringify(TransactionHistory));
    Swal.fire({
        title: 'Success!',
        text: 'Your account has been created.',
        icon: 'success',
        confirmButtonText: 'Continue'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'login.html'; 
        }
      });
}
