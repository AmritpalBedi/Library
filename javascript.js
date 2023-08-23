const myLibrary = [];

function Book(title, author, pages, read, background) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.background = background;
    this.info = () => (read) ? `${title} by ${author}, ${pages} pages, read` : `${title} by ${author}, ${pages} pages, not read yet`;
}

function addBookToLibrary(title, author, pages, read, background) {
    let newItem = new Book(title, author, pages, read, background);
    myLibrary.push(newItem);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true, "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FxQYiXsheRCDBA39DOrmaw1aSpbk.jpg&sp=1692742713T854586d7eca42a8e7eb8bb5337052cea14daa62178b5d554ddfd4a169a284f1f");
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 448, false, "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.blackgate.com%2Fwp-content%2Fuploads%2F2014%2F01%2FThe-Fellowship-of-the-Ring-poster.jpg&sp=1692743710T05031d62e9b2f1f0a4990e685a0ff5fb6193171a87dc46a8178a75c4c765db9a");
addBookToLibrary("The Two Towers", "J.R.R. Tolkien", 464, false, "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FrrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg&sp=1692743735Teda7d0acd3dcb4248f1d6962442dd6ff3f74f13b29d599564e21cbde5f53ad2c");
addBookToLibrary("The Return of the King", "J.R.R. Tolkien", 464, false, "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FdNsEaafO4huvqzVrlPuSQWIHOy0.jpg&sp=1692743761T3c67313a2eabd0c477e5e7b129d653bdcf8a9e8cd64616c01928976b531a61cb");

const container = document.querySelector("#container");
const newBook = document.querySelector(".new-book");
const showCase = document.querySelector(".showcase");

//showCase.textContent = `${myLibrary.length}`;

for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    let image = myLibrary[i].background;
    book.style.cssText = `width: 400px; height: 600px; background-size: cover; background-image: url(${image}); background-color: black;`
    showCase.appendChild(book);
}

