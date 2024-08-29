// - **Explanation**: Higher-order functions are functions that take other functions as arguments or return a function as a result.
// - **Example**: 
  
  function applyOperation(a, b, operation) {
    return operation(a, b);
  }

  console.log(applyOperation(5, 2, (x, y) => x * y)); // Output: 10

// it uses anonymous arrow function