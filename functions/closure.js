// - **Explanation**: A closure is a function that remembers the environment in which it was created. It can access variables from the outer function even after the outer function has returned.
// - **Example**: 

  function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(outerVariable + innerVariable);
    };
  }
  let newFunction = outerFunction("Hello, ");
  
  newFunction("World!"); // Output: Hello, World!
  
