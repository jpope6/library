/* eslint-disable max-classes-per-file */
const container = document.getElementById("container");
const modal = document.getElementById("modal");
const openButton = document.getElementById("add-book");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

// open add book modal pop up
openButton.addEventListener("click", () => {
  modal.showModal();
});

// close add book modal pop up
cancel.addEventListener("click", () => {
  modal.close();
  document.getElementById("form").reset();
});

// modal closes if you click outside of it
modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
    document.getElementById("form").reset();
  }
});

// when user clicks submit, add book to screen
submit.addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read_status = document.getElementById("read");
  let read = false;

  if (title == "") {
    title = "N/A";
  }

  if (author == "") {
    author = "N/A";
  }

  if (pages == "") {
    pages = "0";
  }

  if (read_status.checked) {
    read = true;
  }

  let book = new Book(author, title, pages, read);
  library.addBook(book);
  library.displayBook(book);

  document.getElementById("form").reset();
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

  // display book onto the screen
  displayBook(bookToAdd) {
    let book = document.createElement("div");

    let title = document.createElement("h2");
    title.textContent = bookToAdd.title;
    book.appendChild(title);

    let author = document.createElement("h2");
    author.textContent = bookToAdd.author;
    book.appendChild(author);

    let pages = document.createElement("h2");
    pages.textContent = "Pages: " + bookToAdd.numPages;
    book.appendChild(pages);

    let buttons = document.createElement("div");
    buttons.id = "buttons";

    let read = document.createElement("button");
    if (bookToAdd.read) {
      read.textContent = "Read";
    } else {
      read.textContent = "Not Read";
    }
    read.addEventListener("click", () => this.changeReadStatus(book, read));

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => this.deleteBook(book));

    buttons.appendChild(read);
    buttons.appendChild(del);

    book.appendChild(buttons);

    container.appendChild(book);
  }

  // change read status on button press
  changeReadStatus(bookToChange, div) {
    if (bookToChange.read) {
      bookToChange.read = false;
      div.textContent = "Not Read";
    } else {
      bookToChange.read = true;
      div.textContent = "Read";
    }
  }

  // delete book on button press
  deleteBook(bookToDelete) {
    const index = this.books.indexOf(bookToDelete);
    if (index > -1) {
      this.books.splice(index, 1);
    }
    bookToDelete.remove();
  }
}

const library = new Library();
