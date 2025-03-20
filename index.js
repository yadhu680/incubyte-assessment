// Instance to show result:
let resultMsg = document.getElementById('result');
// Test Case functionality here:
function stringCalculatorTester() {
  const inpStr = document.getElementById('inputString').value;
  resultMsg.className = '';
  // Check for empty value entered, else proceed:
  if (!inpStr) {
    resultMsg.classList.add('failure');
    resultMsg.textContent = 'Enter numbers!';
    return;
  } else {
    resultMsg.classList.add('success');
    resultMsg.textContent = '';
    // Show the calculated test result here:
    resultMsg.textContent = strCalculator.calculate(inpStr);
  }
}

// Function to do calculation based on entered numbers:
const strCalculator = {
  calculate: function (numbers) {
    if (numbers === '""') return 0;
    numbers = numbers.replaceAll('\\', '');
    let delimiter = /[\\n,]/; // Default delimiters: comma or newline:
    // Support for different delimiters:
    if (numbers.startsWith('//')) {
      const parts = numbers.split('n');
      delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter:
      numbers = parts[1];
    }
    const splitNumbers = numbers.split(delimiter);
    let sum = 0;
    const negativeNumbers = [];
    // Check for negative numbers else continue adding:
    for (let i = 0; i < splitNumbers.length; i++) {
      if (splitNumbers[i] < 0) {
        negativeNumbers.push(splitNumbers[i]);
      } else {
        sum += parseInt(splitNumbers[i]);
      }
    }
    // Check and display an exception for negative numbers:
    if (negativeNumbers.length > 0) {
      resultMsg.className = '';
      resultMsg.classList.add('failure');
      return (
        'Negative numbers not allowed (' + negativeNumbers.join(', ') + ')'
      );
    } else {
      resultMsg.classList.add('success');
      resultMsg.textContent = '';
      // Assigning the sum to numbers for checking in the test case:
      numbers = sum;
      return numbers;
    }
  },
};

// Calling the calculate test case function here:
const btn = document.querySelector('#calculate');
btn.addEventListener('click', stringCalculatorTester);
