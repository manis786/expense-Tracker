function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var users = JSON.parse(localStorage.getItem("userData")) || [];
  var userFound = false;
  // for (var i = 0; i < users.length; i++) {
  //   var user = users[i];
  // }
  for (var index in users) {
    var user = users[index]
    console.log(user)
    if (user.email == username && user.password == password) {
      // alert("User Authenticated Successfully!")
      userFound = true
      Swal.fire({
        title: 'Success!',
        text: 'Login Successful.',
        icon: 'success',
        confirmButtonText: 'Continue'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'index.html';
        }
      });
      var currentUser = {
        username: user.username,
        email: user.email
      }
      sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
     
    }
  }
  if (!userFound) {
    alert("User not found!")
    location.href = "./signup.html";
  }
}

