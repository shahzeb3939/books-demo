
let list = document.querySelector("#book-list ul")
list.addEventListener("click", e => {
    if (Array.from(e.target.classList).includes("delete")) {
        e.target.parentElement.remove()
    }
})


let addBookForm = document.querySelector("form#add-book");
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let input = document.querySelector("form#add-book input[type='text']");
    let inputValue = input.value;

    if(inputValue != "") {
        let booklist = document.querySelector("#book-list ul");
        booklist.innerHTML+=`<li>
        <span class="name">${inputValue}</span>
        <span class="delete">delete</span>
        </li>`
        input.value = ""
    }
})


let booksCheckbox = document.querySelector("#books-checkbox");
booksCheckbox.addEventListener("click", function(e) {

    let checkbox = booksCheckbox.querySelector("input.checkbox");
    let booklist = document.querySelector("#book-list ul");


    if (checkbox.checked === true) {
        checkbox.checked = false
        booklist.classList.remove("hide")
    } else {
        checkbox.checked = true
        booklist.classList.add("hide")
    }
})


let checkbox = document.querySelector("#books-checkbox input");
checkbox.addEventListener("change", function(e) {

    let booklist = document.querySelector("#book-list ul");


    if (checkbox.checked === true) {
        checkbox.checked = false
        booklist.classList.remove("hide")
    } else {
        checkbox.checked = true
        booklist.classList.add("hide")
    }
})