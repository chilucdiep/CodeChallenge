

const searchButton = document.getElementById('nominate-button')
const resultElement = document.querySelector(".results")


// {
//     Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
//     Title: "Harry Potter and the Deathly Hallows: Part 2"
//     Type: "movie"
//     Year: "2011"
//     imdbID: "tt1201607"
// }

searchButton.addEventListener('click', async () => {
    const input = document.getElementById('searchInput');
    const search = input.value
    const result = await apiSearch(search)

    if(result.Error) {
        console.log(result.Error);
        return;
    }

    const moviesList = result.Search;
    resultElement.innerHTML = ''
    for (const movie of moviesList) {
        const movieListItem = document.createElement("li");
        const movieListItemButton = document.createElement("button");

        movieListItem.innerHTML = movie.Title;
        movieListItemButton.innerHTML = "Nominate";

        movieListItem.appendChild(movieListItemButton);
        // resultElement.innerText += `\n${movie.Title} (${movie.Year})`
        resultElement.appendChild(movieListItem);
    }
})

let firstSearch = 'terminator'

function apiSearch(searchString) {
    return fetch(`http://www.omdbapi.com/?s=${searchString}*&apikey=2bce123b`)
            .then(res => res.json())
}


   

// search.addEventListener("click", () => {
//     optionsContainer.classList.toggle("active");
// })

// optionsList.forEach( o => {
//     o.addEventListener("click", () => {
//         nominationElement.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");
//     })
// })



// const filterList = searchTerm => {
//     searchTerm = searchTerm.toLowerCase();
//     optionsList.forEach(option => {
//         let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
//         if (label.indexOf(searchTerm) != -1) {
//             option.style.display = "block";
//         } else {
//             option.style.display = "none";
//         }
//     })
// }