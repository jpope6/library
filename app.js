/* eslint-disable max-classes-per-file */
const container = document.getElementById("container");
const modal = document.getElementById("modal");
const openButton = document.getElementById("add-book");
const cancel = document.getElementById("cancel");

// open add book modal pop up
openButton.addEventListener("click", () => {
  modal.showModal();
});

// close add book modal pop up
cancel.addEventListener("click", () => {
  modal.close();
});

// modal closes if you click outside of it
modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
  }
});
class Book {
  constructor(author = "N/A", title = "N/A", numPages = 0, read) {
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

  updateRead(element) {
    if (element.read) {
      element.read = false;
    } else {
      element.read = true;
    }
  }

  // display all books onto the screen
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
      pages.textContent = "Pages: " + this.books[i].numPages;
      book.appendChild(pages);

      let read = document.createElement("button");
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
