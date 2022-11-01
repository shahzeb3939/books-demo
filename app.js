
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


let searchBooksInput = document.querySelector("#search-books input");
searchBooksInput.addEventListener("keyup", (e)=>{
    console.log(e)
    console.log(e.target.value)

    let booksSpan = document.querySelectorAll("#book-list ul li span.name");
    Array.from(booksSpan).forEach(book => {
        if ((book.innerText.search(e.target.value) < 0) && (book.innerText.toLowerCase().search(e.target.value.toLowerCase()) < 0)) {
            book.parentElement.classList.add("hide")
        } else {
            book.parentElement.classList.remove("hide")
        }
    })

    




    // if (e.key === "Enter") {
    //     console.log(true, "enter is pressed")
    // }
})

// searchBooksInput.addEventListener("submit", (e)=>{
//     e.preventDefault();
// })