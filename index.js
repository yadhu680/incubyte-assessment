// Instance to show error:
let errorMsg = document.getElementById('error');

// Test Case functionality here:
function stringCalculatorTester() {
  const inpStr = document.getElementById('inputString').value;

  // Check for empty value entered, else proceed:
  if (!inpStr) {
    errorMsg.textContent = 'Enter numbers!';
    document.getElementById('result').textContent = '';
    return;
  } else {
    errorMsg.textContent = '';

    // Show the calculated test result here:
    document.getElementById('result').textContent = checkResult(inpStr, 6);

    // Function to check the test case and return test result:
    function checkResult(val, res) {
      return (result =
        strCalculator.calculate(val) === res
          ? `Success: Evaluating ${val} to ${res}`
          : `Failed: Evaluating ${val} to ${res}`);
    }
  }
}

// Function to Calculate based on entered numbers:
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

        // Assigning the sum to numbers for checking in the test case:
        numbers = sum;

        // Display an exception for negative numbers:
        negativeNumbers.length > 0
        ? (errorMsg.textContent =
            'Negative numbers not allowed (' + negativeNumbers.join(', ') + ')')
        : (errorMsg.textContent = '');

        return numbers;
        
    },
};

// Calling the calculate test case function here:
const btn = document.querySelector('#calculate');
btn.addEventListener('click', stringCalculatorTester);