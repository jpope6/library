/* eslint-disable max-classes-per-file */
const container = document.getElementById("container");
class Book {
  constructor(author, title, numPages, read) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  displayBooks() {
    for (let i = 0; i < this.books.length; i++) {
      let book = document.createElement("div");

      let title = document.createElement("h2");
      title.textContent = this.books[i].title;
      book.appendChild(title);

      let author = document.createElement("h2");
      author.textContent = this.books[i].author;
      book.appendChild(author);

      let pages = document.createElement("h2");
      pages.textContent = this.books[i].numPages;
      book.appendChild(pages);

      let read = document.createElement("h2");
      if (this.books[i].read) {
        read.textContent = "Read";
      } else {
        read.textContent = "Not Read";
      }
      book.appendChild(read);

      container.appendChild(book);
    }
  }
}

const library = new Library();

const harryPotter = new Book("JK", "Harry Potter", 500, true);
const harryPotter1 = new Book("JK", "Harry Potter1", 500, false);
const harryPotter2 = new Book("JK", "Harry Potter2", 500, true);
library.addBook(harryPotter);
library.addBook(harryPotter1);
library.addBook(harryPotter2);

library.displayBooks();
