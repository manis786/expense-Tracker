var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
if(!currentUser){
    location.href = "./login.html";
}
var btn1 = document.getElementById('Bttn1');
var btn2 = document.getElementById('Bttn2');

btn1.addEventListener('click', function () {
    var Transdiv = document.getElementById('transDiv');
    Transdiv.style.display = 'block';
    btn1.style.display = 'none';
    btn2.style.display = 'block';
});
btn2.addEventListener('click', function () {
var description = document.getElementById('description').value;
var amount = document.getElementById('amount').value;
if(description === "" || amount === ""){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
      return;
}});

var userTransactions = JSON.parse(localStorage.getItem("userTransactions")) || [];
var userHistory = {
    id: currentUser.id,
    userTransactions: []
}
var transaction = {
    description: description,
    amount: parseFloat(amount),
    date: new Date().toLocaleString()
};
userHistory.userTransactions.push(transaction);
userTransactions.push(userHistory);
console.log(userTransactions);
// localStorage.setItem("userTransactions", JSON.stringify(userTransactions));