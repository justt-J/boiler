// **Explanation**: The `this` keyword can be explicitly bound to a specific object using the `bind`, `call`, or `apply` methods.
// - **Example**:  

  let person = {
    name: "Alice",
    age: 18,
    country: "Philippines"
  };

  function greet() {
    console.log("Hello, " + this.name, "from " + this.country);
  }

  let boundGreet = greet.bind(person);
  boundGreet(); // Output: Hello, Alice

