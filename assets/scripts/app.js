const defualtResult = 0;
let currentResult = defualtResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalculation, calcNumber){
    const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function add() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult
  currentResult += enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber)
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult
  currentResult -= enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult
  currentResult *= enteredNumber;
  createAndWriteLog("x", initialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult
  currentResult /= enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)
