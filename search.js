// 

// Get the form element
// var form = document.querySelector("form");

// // Get the input element
// var input = document.querySelector("input");

// // Get the button element
// var button = document.querySelector("button");

// // Add a click event listener to the button
// button.addEventListener("click", function(event) {
// // Prevent the default form submission behavior
// event.preventDefault();

// // Get the value of the input
// var query = input.value;

// // Check if the query is not empty
// if (query) {
// // Find all the elements that contain the query in their text content
// var matches = document.querySelectorAll("*:contains('" + query + "')");

// // Loop through the matches and highlight them with a yellow background
// for (var i = 0; i < matches.length; i++) {
// matches[i].style.backgroundColor = "yellow";
// }

// // Alert the number of matches found
// alert("Found " + matches.length + " elements that contain '" + query + "'");
// } else {
// // Alert that the query is empty
// alert("Please enter a search query");
// }
// });

const searchResults = document.getElementById('searchbar');
searchResults.addEventListener('input',handleSearch);

function handleSearch() {
    const searchKeyword = searchInput.value.toLowerCase();
    const savedNotes = document.querySelectorAll('.saved-note');

    savedNotes.forEach((note) =>{
        const noteTitle = note
        .querySelector('.note-title h4')
        .textContent.toLocaleLowerCase();
        const noteContent = note
        .querySelector('.note-title p')
        .textContent.toLocaleLowerCase();

        if(
            noteTitle.includes(searchKeyword) ||
            noteContent.includes(searchKeyword)
        ){
            note.computedStyleMap.display = 'flex';
        }else{
            note.style.display = 'none';
        }
    });
}