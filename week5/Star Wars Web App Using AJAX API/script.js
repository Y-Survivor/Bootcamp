/**
 * Wait for the DOM to be fully loaded before executing JavaScript.
 * This ensures all HTML elements we need to manipulate exist in the DOM.
 */
document.addEventListener('DOMContentLoaded', function() {
    // ============== DOM ELEMENT SELECTORS ==============
    // These constants store references to key HTML elements we'll manipulate:
    const nameElement = document.getElementById('character-name');      // Where character name appears
    const heightElement = document.getElementById('height');           // Height display element
    const genderElement = document.getElementById('gender');           // Gender display element
    const birthYearElement = document.getElementById('birth-year');    // Birth year display element
    const homeworldElement = document.getElementById('homeworld');     // Homeworld display element
    const findButton = document.getElementById('find-character');     // The "Find Someone" button
    const loadingElement = document.querySelector('.loading');         // Loading spinner/message container
    const errorElement = document.querySelector('.error');             // Error message container
    const characterInfoElement = document.querySelector('.character-info'); // Main character info container
    
    // ============== API CONFIGURATION ==============
    // Base URL for Star Wars API (SWAPI) people endpoint
    // Note: This API returns data about Star Wars characters
    const apiUrl = 'https://www.swapi.tech/api/people/';
    
    // ============== MAIN FUNCTION ==============
    /**
     * Async function to fetch and display a random Star Wars character.
     * This is the core function that handles:
     * 1. Showing loading states
     * 2. Fetching character data
     * 3. Fetching homeworld data
     * 4. Updating the UI
     * 5. Handling errors
     */
    async function fetchRandomCharacter() {
        try {
            // ===== UI STATE MANAGEMENT =====
            // Show loading indicator while we fetch data
            loadingElement.style.display = 'block';
            // Hide any previous error messages
            errorElement.style.display = 'none';
            // Ensure character info section is visible (might be hidden from previous error)
            characterInfoElement.style.display = 'block';
            
            // ===== CHARACTER SELECTION =====
            // Generate random ID between 1-83 because SWAPI has 83 characters
            // Breakdown of the math:
            // Math.random() generates 0-0.999...
            // Multiply by 83 → 0-82.999...
            // Math.floor() → 0-82 (integer)
            // +1 → 1-83 (our desired range)
            const randomId = Math.floor(Math.random() * 83) + 1;
            
            // ===== API FETCH - CHARACTER DATA =====
            // Fetch character data from SWAPI using template literal to insert randomId
            const response = await fetch(`${apiUrl}${randomId}`);
            
            // Check if response was successful (status code 200-299)
            // If not successful, throw an error that will be caught in the catch block
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            // Parse JSON response into JavaScript object
            const data = await response.json();
            
            // Additional validation - check if API returned the expected data structure
            // Some APIs return 200 OK but with incomplete data
            if (!data.result || !data.result.properties) {
                throw new Error('Character data is incomplete');
            }
            
            // Extract character properties from nested API response structure
            // SWAPI nests the actual character data in data.result.properties
            const character = data.result.properties;
            
            // ===== API FETCH - HOMEWORLD DATA =====
            // Fetch homeworld data (URL is provided in character data)
            const homeworldResponse = await fetch(character.homeworld);
            
            // Validate homeworld response
            if (!homeworldResponse.ok) {
                throw new Error('Failed to fetch homeworld data');
            }
            
            // Parse homeworld JSON data
            const homeworldData = await homeworldResponse.json();
            
            // Extract homeworld name from nested structure
            // SWAPI nests homeworld name in result.properties.name
            const homeworldName = homeworldData.result.properties.name;
            
            // ===== UPDATE UI WITH CHARACTER DATA =====
            // Set all character information in the DOM elements
            nameElement.textContent = character.name;  // Set character name
            heightElement.textContent = `Height: ${character.height}`;  // Format height with label
            genderElement.textContent = `Gender: ${character.gender}`;  // Format gender with label
            birthYearElement.textContent = `Birth Year: ${character.birth_year}`;  // Format birth year
            homeworldElement.textContent = `Home World: ${homeworldName}`;  // Format homeworld
            
            // ===== FINAL UI UPDATE =====
            // Hide loading spinner since data is now displayed
            loadingElement.style.display = 'none';
            
        } catch (error) {
            // ===== ERROR HANDLING =====
            // Log full error to console for debugging
            console.error('Error fetching character:', error);
            
            // Hide loading spinner (since request failed)
            loadingElement.style.display = 'none';
            
            // Hide character info section (clean slate for error display)
            characterInfoElement.style.display = 'none';
            
            // Show error message container
            errorElement.style.display = 'block';
            
            // Set user-friendly error message with HTML structure
            // This allows for better styling with CSS classes
            errorElement.innerHTML = `
                <p>Oh no! That person isn't available.</p>
                <p class="error-subtext">Please try again</p>
            `;
            
            // Note: In a production app, you might want to:
            // 1. Log the error to an error tracking service
            // 2. Have different messages for different error types
            // 3. Include a "Retry" button in the error message
        }
    }
    
    // ============== EVENT LISTENERS ==============
    // Add click event listener to "Find Someone" button
    // When clicked, fetch and display a new random character
    findButton.addEventListener('click', fetchRandomCharacter);
    
    // ============== INITIAL LOAD ==============
    // Fetch and display a random character when page first loads
    // This overrides any default data that might be in the HTML
    fetchRandomCharacter();
});