const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => (read) ? `${title} by ${author}, ${pages} pages, read` : `${title} by ${author}, ${pages} pages, not read yet`
}

function addBookToLibrary() {
    let newItem = new Book(title, author, pages, read)
    myLibrary.push(newItem)
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
let theFellowship = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 448, false)
let twoTowers = new Book("The Two Towers", "J.R.R. Tolkien", 464, false)
let returnKing = new Book("The Return of the King", "J.R.R. Tolkien", 464, false)

