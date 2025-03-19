// Test Calculator functionality here:
function stringCalculatorTester() {
    const inpStr = document.getElementById('inputString').value;
    document.getElementById('result').textContent = checkResult(inpStr, 0);
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
    }
};