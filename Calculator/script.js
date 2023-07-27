function appendCharacter(character) {
  document.getElementById("result").value += character;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLastChar() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
  var result = document.getElementById("result").value;
  var answer = eval(result);
  document.getElementById("result").value = answer;
}

function toggleSign() {
  var result = document.getElementById("result").value;
  if (result !== "" && result !== "0") {
    if (result.charAt(0) === "-") {
      document.getElementById("result").value = result.slice(1);
    } else {
      document.getElementById("result").value = "-" + result;
    }
  }
}
