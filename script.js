const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author's name:");
  const pages = parseInt(prompt("Enter the number of pages:"));
  const read = confirm("Have you read this book?");

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayBooks(); // Update the display after adding a new book
}

function displayBooks() {
  const bookshelf = document.getElementById('bookshelf');
  bookshelf.innerHTML = ''; // Clear existing display

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="removeBook(${index})">Remove</button>
    `;
    bookshelf.appendChild(bookCard);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks(); // Update the display after removing a book
}

// Manually add a few books for initial display
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 281, false));
myLibrary.push(new Book("1984", "George Orwell", 328, true));

// Initial display of books
displayBooks();