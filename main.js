function authenticate() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var output = document.getElementById("output");

 
  if (user == "" || pass == "") {
    output.innerHTML = "Please fill in all fields.";
    output.style.color = "orange";
  }
 
  else if (user == "John User" && pass == "12346711") {
    output.innerHTML = "Login Successful!";
    output.style.color = "green";
  }

  else {
    output.innerHTML = "Incorrect Username or Password.";
    output.style.color = "red";
  }
}

function showCredentials() {
  var output = document.getElementById("output");
  var correctUser = "John User";
  var correctPass = "12346711";

  output.innerHTML = "Correct Username: " + correctUser + "<br>Correct Password: " + correctPass;
  output.style.color = "blue";
}
