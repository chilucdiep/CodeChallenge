

const searchButton = document.getElementById('nominate-button')
const resultElement = document.querySelector(".results")

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
        resultElement.appendChild(movieListItem);
    }
})

function apiSearch(searchString) {
    return fetch(`http://www.omdbapi.com/?s=${searchString}*&apikey=2bce123b`)
            .then(res => res.json())
}
