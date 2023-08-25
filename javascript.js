let myLibrary = [];

function addBookToLibrary(title, author, pages, read, background) {
    let newItem = new Book(title, author, pages, read, background);
    myLibrary.push(newItem);
}

function Book(title, author, pages, read, background) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.background = background;
    this.info = () => (read) ? `${title} by ${author}, ${pages} pages, read` : `${title} by ${author}, ${pages} pages, not read yet`;
}

const showCase = document.querySelector(".showcase");
function showBooks() {
    showCase.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement("div");
        let image = myLibrary[i].background;
        book.style.cssText = `width: 400px; height: 650px; background-size: cover; background-image: url(${image}); background-color: black;`

        const remove = document.createElement("button");
        remove.style.cssText = `width: 200px; height: 50px;`
        remove.classList.add("remove_button");
        remove.classList.add(`${i}`);
        remove.innerHTML = "Remove Book"

        const readButton = document.createElement("button");
        readButton.classList.add("read_button");
        readButton.classList.add(`${i}`);
        readButton.style.cssText = `width: 200px; height: 50px;`

        if (myLibrary[i].read) {
            readButton.innerHTML = "Read"
        } else {
            readButton.innerHTML = "Not Read"
        }

        book.appendChild(remove);
        book.appendChild(readButton);
        showCase.appendChild(book);

    }
    setRemoveButtons();
    setReadStatus();
}

const showButton = document.querySelector(".showDialog");
const addBook = document.querySelector("#add_book");
const confirmBtn = document.querySelector("#submit_book");

showButton.addEventListener("click", () => {
    addBook.showModal();
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let title = document.getElementById("book_title").value;
    let author = document.getElementById("book_author").value;
    let pages = document.getElementById("book_pages").value;
    let read = document.getElementById("book_status").checked;
    let background = document.getElementById("book_background").value;
    clearForm();
    addBook.close();
    addBookToLibrary(title, author, pages, read, background);
    showBooks();

});

function clearForm() {
    document.getElementById("book_title").value = "";
    document.getElementById("book_author").value = "";
    document.getElementById("book_pages").value = "";
    document.getElementById("book_status").checked = "";
    document.getElementById("book_background").value = "";
}

function removeBook(bookPosition) {
    bookPosition = +bookPosition
    let firstHalf = myLibrary.slice(0, bookPosition);
    let secondHalf = myLibrary.slice(bookPosition + 1);
    let newLibrary = firstHalf.concat(secondHalf);

    myLibrary = newLibrary
    showBooks();
}

let removeButtons = document.querySelectorAll(".remove_button");
function setRemoveButtons() {
    removeButtons = document.querySelectorAll(".remove_button");
    removeButtons.forEach(removeButton => removeButton.addEventListener("click", () => {
        let className = removeButton.className.split(" ");
        removeBook(className[1]);
    }));
}

let readIndicators = document.querySelectorAll(".read_button");
function setReadStatus() {
    readIndicators = document.querySelectorAll(".read_button");
    readIndicators.forEach(readIndicator => readIndicator.addEventListener("click", () => {
        let status = readIndicator.innerHTML;
        let className = readIndicator.className.split(" ");
        let bookNumber = +className[1]
        if (status.toLowerCase() == "not read") {
            myLibrary[bookNumber].read = true;
        } else {
            myLibrary[bookNumber].read = false;
        }
        showBooks();
    }));
}