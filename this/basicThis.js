// - **Explanation**: The `this` keyword refers to the object from which the function was called. The value of `this` can vary depending on how a function is called.
// - **Example**: 
  let person = {
    name: "Alice",
    age: 18,
    greet: function() {
      console.log("Hello, " + this.name, "aged: " + this.age);
    }
  };
  
  person.greet(); // Output: Hello, Alice
  
