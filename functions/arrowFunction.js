// - **Explanation**: Arrow functions, introduced in ES6, provide a more concise syntax for writing functions. They also do not have their own `this` context.
// - **Example**: 
  
  let addArrowFunc = (a, b) => a + b;

  function addNormalFunc(a, b ){
    return a + b
  }
  
  console.log(addArrowFunc(2, 3)); // Output: 5
  console.log(addNormalFunc(2, 3)); // Output: 5

