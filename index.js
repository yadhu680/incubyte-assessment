// Test Calculator functionality here:
function stringCalculatorTester() {
    const inpStr = document.getElementById('inputString').value;
    document.getElementById('result').textContent = checkResult(inpStr, 6);
    function checkResult(val, res) {
      return (result =
        strCalculator.calculate(val) === res
          ? `Success: Evaluating ${val} to ${res}`
          : `Failed: Evaluating ${val} to ${res}`);
    }
}

// Function to Calculate based on entered numbers
const strCalculator = {
    calculate: function (numbers) {
        if (numbers === '""') return 0;
    
        numbers = numbers.replaceAll('\\', '');
    
        let delimiter = /[\\n,]/; // Default delimiters: comma or newline      
    
        const splitNumbers = numbers.split(delimiter);
        let sum = 0;
        const negativeNumbers = [];
        
        // Check for negative numbers else continue adding
        for (let i = 0; i < splitNumbers.length; i++) {
            if (splitNumbers[i] < 0) {
                negativeNumbers.push(splitNumbers[i]);
            } else {
                sum += parseInt(splitNumbers[i]);
            }
        }

        numbers = sum;

        // Display an exception for negative numbers
        negativeNumbers.length > 0
        ? (document.getElementById('error').textContent =
            'Negative numbers not allowed ' + negativeNumbers.join(', '))
        : (document.getElementById('error').textContent = '');

        return numbers;
        
    },
  };

// Calling the calculate function here
const btn = document.querySelector('#calculate');
btn.addEventListener('click', stringCalculatorTester);