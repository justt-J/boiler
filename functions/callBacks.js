// - **Explanation**: A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.
// - **Example**: 

function processUserInput(callback) {
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Please enter your name: ', userInput => {
        callback(userInput);
        readline.close();
      });
      
  }

  let callback = name => {
    console.log("Hello, " + name);
  }
  
  processUserInput(callback);

  
  