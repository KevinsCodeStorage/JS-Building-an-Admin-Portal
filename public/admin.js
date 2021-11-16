// Your Code Here

async function getBooks(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(adminDisplay)

}

function adminDisplay(book){
    let adminContainer = document.querySelector('.bookUpdate')
    adminContainer.innerHTML+=`
        <li>
            <label for="book">${book.title}:</label>
            <input type="text" id="book" name="book" value=${book.quantity}>
        </li>


    `

}

getBooks()