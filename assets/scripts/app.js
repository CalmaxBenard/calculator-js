const defualtResult = 0;
let currentResult = defualtResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalculation, calcNumber) {
  const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //From vendor file
}

function writeToLog(operation, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: operationNum,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    alert("That is not allowed!");
    return;
  }

  initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "x";
  } else if (calculationType === "DIVIDE") {
    if (!enteredNumber) {
      alert("That is not allowed!");
      return;
    } else {
      currentResult /= enteredNumber;
      mathOperator = "/";
    }
  }

  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
