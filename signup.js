// var UserData = JSON.parse(localStorage.getItem("userData")) || [];
var signupBtn = document.getElementById("signupButton");
signupBtn.addEventListener("click", function () {
    var users = JSON.parse(localStorage.getItem("userData")) || [];
    var username = document.getElementById("newUsername").value;
    var email = document.getElementById("Newemail").value;
    var password = document.getElementById("newPassword").value;
    var rpassword = document.getElementById("repeatPassword").value;

    if (!username || !email || !password) {
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
        id: id,
        username: username,
        email: email,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("userData", JSON.stringify(users));
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
});
