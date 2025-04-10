// Giphy API URL with search query for "hilarious" gifs with g rating
const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Using fetch to make a GET request to the Giphy API
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Log the JavaScript object received from the API
    console.log('Received data from Giphy API:', data);
  })
  .catch(error => {
    // Catch and log any errors that occur during the fetch
    console.error('Error fetching data from Giphy API:', error);
  });