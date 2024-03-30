let calculation = "";

function appendToDisplay(value) {
  document.getElementById("display").value += value;
  calculation += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  calculation = "";
}

function calculate() {
  let result;
  try {
    result = eval(calculation);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("display").value = result;
  calculation = result.toString();
}
