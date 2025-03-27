// 1. Retrieve the h1 and console.log it
const h1 = document.querySelector('h1');
console.log(h1);

// 2. Remove the last paragraph
const paragraphs = document.querySelectorAll('article p');
if (paragraphs.length > 0) {
    paragraphs[paragraphs.length - 1].remove();
}

// 3. Change h2 background to red when clicked
const h2 = document.querySelector('h2');
h2.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

// 4. Hide h3 when clicked
const h3 = document.querySelector('h3');
h3.addEventListener('click', function() {
    this.style.display = 'none';
});

// 5. Make all paragraphs bold when button is clicked
const boldBtn = document.getElementById('boldBtn');
boldBtn.addEventListener('click', function() {
    document.querySelectorAll('article p').forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

// BONUS 1: Random font size for h1 on hover
h1.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101); // 0-100
    this.style.fontSize = `${randomSize}px`;
});

// BONUS 2: Fade out second paragraph on hover
if (paragraphs.length >= 2) {
    paragraphs[1].addEventListener('mouseover', function() {
        this.classList.add('fade-out');
    });
}