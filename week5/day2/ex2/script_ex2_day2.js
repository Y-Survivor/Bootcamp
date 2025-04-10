// Giphy API URL with parameters:
// - q=sun: search for sun-related GIFs
// - limit=10: get 10 results
// - offset=2: start from position 2
// - rating=g: only G-rated content
const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

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
    
    // Optional: Log just the GIF URLs for verification
    console.log('\nGIF URLs:');
    data.data.forEach((gif, index) => {
      console.log(`${index + 1}. ${gif.images.original.url}`);
    });
  })
  .catch(error => {
    // Catch and log any errors that occur during the fetch
    console.error('Error fetching data from Giphy API:', error);
  });