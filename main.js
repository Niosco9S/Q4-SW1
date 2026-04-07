function authenticate() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var output = document.getElementById("output");

 
  if (user == "" || pass == "") {
    output.innerHTML = "Please fill in all fields.";
    output.style.color = "orange";
  }
 
  else if (user == "admin" && pass == "1234") {
    output.innerHTML = "Login Successful!";
    output.style.color = "green";
  }

  else {
    output.innerHTML = "Incorrect Username or Password.";
    output.style.color = "red";
  }
}
