function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
  }
  
  function calculateResult() {
    const expression = document.getElementById('result').value;
    const result = eval(expression);
    document.getElementById('result').value = result;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteLastChar() {
    const currentExpression = document.getElementById('result').value;
    const newExpression = currentExpression.slice(0, -1);
    document.getElementById('result').value = newExpression;
  }
  