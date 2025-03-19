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
      for (let i = 0; i < splitNumbers.length; i++) {        
          sum += parseInt(splitNumbers[i]);        
      }
      numbers = sum;
      return numbers;
        
    },
  };

// Calling the calculate function here
const btn = document.querySelector('#calculate');
btn.addEventListener('click', stringCalculatorTester);