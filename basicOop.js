// - **Explanation**: OOP is a programming paradigm based on the concept of objects. Objects can contain both data (attributes) and methods (functions) that operate on the data.
// - **Example**: 
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    getArea() {
      return this.height * this.width;
    }
  }

  let rect = new Rectangle(10, 20);
  console.log(rect.getArea()); // Output: 200
