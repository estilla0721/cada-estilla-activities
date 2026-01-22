const display = document.getElementById("display");
   function appenValue(value) {
    display.value += value;
   }
    function clearDisplay() {
    display.value += value;
}

function calculated() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}