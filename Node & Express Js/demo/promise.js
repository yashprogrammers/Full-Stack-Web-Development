// Promise
const fetchData = new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
  
  fetchData.then((data) => console.log(data));
  
  // Async/Await
  async function getData() {
    const data = await fetchData;
    console.log(data);
  }
  getData();
  