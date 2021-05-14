const calculatorScreen = document.querySelector('.calculator-screen')
const clearBtn = document.querySelector('.all-clear')
const deleteLast = document.querySelector('.undo')
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const numbers = document.querySelectorAll(".number")
const dot = document.querySelector('.decimal')

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';
   
const updateScreen = (number) => calculatorScreen.value = number;

const inputNumber = (number) => {
  if (currentInput === '0') {
    currentInput = number
  } else {
    currentInput = currentInput + number
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentInput)
  })
})

dot.addEventListener('click', addDecimal);
deleteLast.addEventListener('click', deleteLastDigit);

const inputOperator = (operator) => {
  prevInput = currentInput
  calculationOperator = operator
  updateScreen(prevInput + operator)
  currentInput = '0' 
}
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

equalSign.addEventListener("click", () => {
  operate();
  updateScreen(currentInput)
})

const operate = () => {
  let result = 0
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevInput, 10) + parseFloat(currentInput, 10)
      break
    case '-':
      result = parseFloat(prevInput, 10) - parseFloat(currentInput, 10)
      break
    case '*':
      result = parseFloat(prevInput, 10) * parseFloat(currentInput, 10)
      break
    case '/':
      result = parseFloat(prevInput, 10) / parseFloat(currentInput, 10)
      break
    case '%':
      result = parseFloat(prevInput) % parseFloat(currentInput)
      break
    default:
      return
  }
  currentInput = result.toString()
  calculationOperator = ''
}

function addDecimal() {
  if (currentInput.includes(".")) return;

  if (currentInput === "") {
    currentInput += "0.";
  } else {
    currentInput += ".";
  }
  updateScreen(currentInput)
}

clearBtn.addEventListener("click", () => {
  console.log('Clear')
  prevInput = '0'
  calculationOperator = ''
  currentInput = '0'
  updateScreen(currentInput)
})

function delet() {
  forms.answer.value = forms.answer.value.substr(0, forms.answer.value.length - 1);

  updateScreen(currentInput);
  forms.answer.innerText = currentInput;
  if (currentInput.length === 0) {
    currentInput.innerText = "0";
  }
}

function deleteLastDigit() {
  forms.answer.value = forms.answer.value.substr(0, forms.answer.value.length - 1);
  currentInput = forms.answer.value;
  console.log(currentInput);
  if (forms.answer.value.length == 0 || forms.answer.value.length == '') {
    calculatorScreen.value = "0";
  }

}