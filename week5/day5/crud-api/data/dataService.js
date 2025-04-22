const axios = require('axios');

/**
 * Fetches all posts from JSONPlaceholder API
 * @returns {Promise<Array>} Array of posts
 */
const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error in data service:', error.message);
    throw error;
  }
};

module.exports = {
  fetchPosts
};