// - **Explanation**: Every JavaScript object has a prototype. A prototype is also an object, from which other objects inherit properties and methods.
// - **Example**: 

//there is two function a greet and person that is interconnected by .prototype

  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
  };

  let alice = new Person("Alice");
  alice.greet(); // Output: Hello, Alice
