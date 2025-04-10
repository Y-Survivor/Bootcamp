async function fetchStarshipData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      
      // Here we will check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data.result);
    } catch (error) {
      console.error('Error fetching starship data:', error);
    }
  }
  
  // Call the async function
  fetchStarshipData();