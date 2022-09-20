//listas
var users = [];
var passwords = [];
//botoes
const registerbtn = document.getElementById("registerbtn");
const loginbtn = document.getElementById("loginbtn");

// funcao para registrar usuarios
function register() {
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  if (users.includes(user)) {
    alert("User already exist!");
  } else {
    users.push(user);
    passwords.push(password);
    console.log(users, passwords);
    alert("Successful register");
  }
}
// funcao para efetuar login no sistema
function login() {
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  if (users.includes(user)) {
    if (passwords.indexOf(password) === users.indexOf(user)) {
      alert("login successful");
    } else {
      alert("wrong password");
    }
  } else {
    alert("user not found");
  }
}
// atribuindo funcoes aos botoes
registerbtn.onclick = register;
loginbtn.onclick = login;

console.log("app.js loaded");
