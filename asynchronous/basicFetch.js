async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicoe.com/posts/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();
  