// 1. Retrieve the div and console.log it
const div = document.getElementById('container');
console.log(div);

// 2. Change "Pete" to "Richard"
document.querySelectorAll('li')[1].textContent = 'Richard';

// 3. Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll('ul')[1];
secondUl.removeChild(secondUl.children[1]);

// 4. Change the first <li> of each <ul> to your name
const firstListItems = document.querySelectorAll('ul li:first-child');
firstListItems.forEach(li => li.textContent = 'Alex'); // Replace "Alex" with your name

// 5. Add class student_list to both <ul>'s
const uls = document.querySelectorAll('ul');
uls.forEach(ul => ul.classList.add('student_list'));

// 6. Add classes university and attendance to the first <ul>
uls[0].classList.add('university', 'attendance');

// 7. Style the div
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

// 8. Hide the <li> with "Dan"
document.querySelectorAll('li').forEach(li => {
    if (li.textContent === 'Dan') {
        li.style.display = 'none';
    }
});

// 9. Add border to "Richard"
document.querySelectorAll('li').forEach(li => {
    if (li.textContent === 'Richard') {
        li.style.border = '1px solid black';
    }
});

// 10. Change body font size
document.body.style.fontSize = '18px';

// Bonus: Alert if div has light blue background
if (div.style.backgroundColor === 'lightblue') {
    const users = Array.from(document.querySelectorAll('#container ~ ul li'))
        .filter(li => li.style.display !== 'none')
        .map(li => li.textContent)
        .filter(name => name !== 'Alex'); // Exclude your name
    
    if (users.length >= 2) {
        alert(`Hello ${users[0]} and ${users[1]}`);
    }
}