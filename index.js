document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  console.log("hello there")
})

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")

    .then(resp => resp.json()) //returns resp.json and pass it as ===> function(json) or json => console.log(json)
    .then(json => renderBooks(json))

    //Commented out code below works as well... for bigger picture...

    // .then(function(response) {  //=> .then(response => response.json())
    //   return response.json();
    // })
    // .then(function(json){
    //   renderBooks(json)
    //   //Use data inside json to do DOM manipulation
    // })
}


function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// fetch("https://anapioficeandfire.com/api/books")
//   .then(function(response) {  //=> .then(response => response.json())
//     return response.json();
//   })
//   .then(function(json){
//     console.log(json)
//     //Use data inside json to do DOM manipulation
//   })
