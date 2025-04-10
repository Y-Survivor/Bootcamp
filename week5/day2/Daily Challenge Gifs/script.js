document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const gifForm = document.getElementById('gif-form');
    const gifSearch = document.getElementById('gif-search');
    const gifContainer = document.getElementById('gif-container');
    const deleteAllBtn = document.getElementById('delete-all-btn');

    // Fetch random GIF based on search term
    gifForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const searchTerm = gifSearch.value.trim();
        
        if (!searchTerm) return;
        
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`);
            const data = await response.json();
            
            if (data.data && data.data.images) {
                displayGif(data.data, searchTerm);
            } else {
                alert('No GIF found for this category. Try another one!');
            }
        } catch (error) {
            console.error('Error fetching GIF:', error);
            alert('Error fetching GIF. Please try again.');
        }
        
        gifSearch.value = '';
    });

    // Display GIF in the container
    function displayGif(gifData, searchTerm) {
        const gifUrl = gifData.images.original.url;
        
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';
        
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = searchTerm + ' GIF';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'DELETE';
        deleteBtn.addEventListener('click', function() {
            gifItem.remove();
        });
        
        gifItem.appendChild(img);
        gifItem.appendChild(deleteBtn);
        gifContainer.appendChild(gifItem);
    }

    // Delete all GIFs
    deleteAllBtn.addEventListener('click', function() {
        gifContainer.innerHTML = '';
    });
});