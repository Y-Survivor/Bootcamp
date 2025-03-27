// 1. Retrieve the form and console.log it
const form = document.getElementById('userForm');
console.log('Form element:', form);

// 2. Retrieve inputs by id and console.log them
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log('First name input:', fnameInput);
console.log('Last name input:', lnameInput);

// 3. Retrieve inputs by name attribute and console.log them
const firstNameInput = document.querySelector('input[name="firstname"]');
const lastNameInput = document.querySelector('input[name="lastname"]');
console.log('First name by name attribute:', firstNameInput);
console.log('Last name by name attribute:', lastNameInput);

// 4. Form submission handler
form.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get the values from inputs
    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();
    
    // Validate that inputs are not empty
    if (!firstName || !lastName) {
        alert('Please fill in both fields');
        return;
    }
    
    // Get the ul element for output
    const usersAnswerList = document.querySelector('.usersAnswer');
    
    // Clear previous entries
    usersAnswerList.innerHTML = '';
    
    // Create and append list items
    const firstNameItem = document.createElement('li');
    firstNameItem.textContent = firstName;
    usersAnswerList.appendChild(firstNameItem);
    
    const lastNameItem = document.createElement('li');
    lastNameItem.textContent = lastName;
    usersAnswerList.appendChild(lastNameItem);
    
    // Reset the form
    form.reset();
});