//counting numbers 1 per 1s promise and async
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function countToTen() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
      await delay(1000); // Wait for 1 second (1000 milliseconds)
    }
  }
  
  countToTen();
  