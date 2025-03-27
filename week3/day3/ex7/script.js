// Create array of books
const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://images-na.ssl-images-amazon.com/images/I/51wScUt0gZL._SX330_BO1,204,203,200_.jpg",
        alreadyRead: true
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        image: "https://images-na.ssl-images-amazon.com/images/I/41UZeCEKOBL._SX331_BO1,204,203,200_.jpg",
        alreadyRead: false
    }
];

// Get the section element
const section = document.querySelector('.listBooks');

// Loop through each book and create elements
allBooks.forEach(book => {
    // Create book div
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    
    // Create title and author paragraph
    const infoPara = document.createElement('p');
    infoPara.textContent = `${book.title} written by ${book.author}`;
    
    // Create image element
    const imgElement = document.createElement('img');
    imgElement.src = book.image;
    imgElement.width = 100;
    
    // Set color if already read
    if (book.alreadyRead) {
        infoPara.style.color = 'red';
    }
    
    // Append elements to book div
    bookDiv.appendChild(infoPara);
    bookDiv.appendChild(imgElement);
    
    // Append book div to section
    section.appendChild(bookDiv);
});