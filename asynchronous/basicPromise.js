// - **Explanation**: Promises represent a value that may be available now, or in the future, or never. They are used to handle asynchronous operations in a more manageable way.
// - **Example**: 

  let promise = new Promise((resolve, reject) => {
    // the resolve is for .then and the Reject is for .catch
    let success = true;
    if (success) {
      resolve("Operation was successful.");
    } else {
      reject("Operation failed.");
    }
  });

  promise.then((message) => {
    console.log(message); // Output: Operation was successful.
  }).catch((message) => {
    console.log("what ??",message); 
  });
