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