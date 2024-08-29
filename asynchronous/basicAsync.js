// - **Explanation**: Asynchronous JavaScript allows code to run without blocking the main thread. Operations like fetching data from an API can be performed asynchronously.
// - **Example**: 

  setTimeout(() => {
    console.log("after 5s");
    
  }, 5000);

  (function() {
    console.log("i was called first even if i was not the first line");
  })();
  


  
