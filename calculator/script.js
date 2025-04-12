let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let ans = document.getElementById("ans");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let remove = document.getElementById("remove");

function fun_add() {
  let result = parseInt(num1.value) + parseInt(num2.value);
  ans.innerText = "Result:" + result;
}
add.onclick = fun_add;
function fun_subtract() {
  let result = parseInt(num1.value) - parseInt(num2.value);
  ans.innerText = "Result:" + result;
}
subtract.onclick = fun_subtract;


function fun_multiply() {
  let result = parseInt(num1.value) * parseInt(num2.value);
  ans.innerText = "Result:" + result;
}
multiply.onclick = fun_multiply;


function fun_divide() {
  let result = parseInt(num1.value) / parseInt(num2.value);
  ans.innerText = "Result:" + result;
}

divide.onclick = fun_divide;

function fun_remove() {
    num1.value = ""
    num2.value = ""
}
remove.onclick = fun_remove