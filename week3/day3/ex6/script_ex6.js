// Change the id attribute of the div
const navDiv = document.querySelector('div');
navDiv.setAttribute('id', 'socialNetworkNavigation');

// Create new li element
const newLi = document.createElement('li');
const logoutText = document.createTextNode('Logout');
newLi.appendChild(logoutText);

// Append the new li to the ul
const ulElement = document.querySelector('ul');
ulElement.appendChild(newLi);

// Get first and last li elements
const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

// Display their text content
console.log('First link:', firstLi.textContent);
console.log('Last link:', lastLi.textContent);