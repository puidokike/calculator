
document.getElementById("add").onclick = function add() {
    let num1 = parseInt(document.getElementById("input-num1").value); 
    let num2 = parseInt(document.getElementById('input-num2').value);
    document.getElementById("input-result").value = num1 + num2;
}

document.getElementById("minus").onclick = function minus() {
    let num1 = parseInt(document.getElementById("input-num1").value); 
    let num2 = parseInt(document.getElementById('input-num2').value);
    document.getElementById("input-result").value = num1 - num2;
}

document.getElementById("multiply").onclick = function multiply() {
    let num1 = parseInt(document.getElementById("input-num1").value); 
    let num2 = parseInt(document.getElementById('input-num2').value);
    document.getElementById("input-result").value = num1 * num2;
}

document.getElementById("division").onclick = function division() {
    let num1 = parseInt(document.getElementById("input-num1").value); 
    let num2 = parseInt(document.getElementById('input-num2').value);
    document.getElementById("input-result").value = num1 / num2;
}
