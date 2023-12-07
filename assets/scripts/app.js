const defualtResult = 0;
let currentResult = defualtResult;

function add() {
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, '');
}

addBtn.addEventListener("click", add);