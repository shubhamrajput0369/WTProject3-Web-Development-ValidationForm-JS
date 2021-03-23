//Author: Shubham Bhagwansing Rajput
//JS

function validate(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter valid email address.";
    error_message.innerHTML = text;
    return false;
  }
  if(password.length < 9){
    text = "Please enter more than 9 characters password.";
    error_message.innerHTML = text;
    return false;
