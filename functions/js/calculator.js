const display = document.getElementById("display");
const operatorBox = document.getElementById("operatorBox");

let firstValue = "";
let operator = "";

function press(value) {
    if (display.value === "0") {
        display.value = value; 
    } else {
        display.value += value; 
    }
}
function pressOperator(op) {
    firstValue = display.value; 
    operator = op;               
    operatorBox.value = operator; 
    display.value = "0";          
}
function calculate() {
    if (firstValue === "" || display.value === "") return;
    const result = eval(firstValue + operator + display.value);
    display.value = result;       
    operatorBox.value = "";       
    firstValue = "";
    operator = "";
}
function allClear() {
    display.value = "0";
    operatorBox.value = "";
    firstValue = "";
    operator = "";
}
function clearLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}
