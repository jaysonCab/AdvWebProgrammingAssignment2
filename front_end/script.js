document.getElementById("searchForm").addEventListener("submit", async function (e) {

    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const type = document.getElementById("type").value;
    
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<p>[ Loading Content, please wait ]</p>`;
    
    const response = await fetch("/api/movie", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, year, type }) // Creates dictionary of these fields, but also converts to JSON string for sending to backend like /title, /year, and /type to interact with API
    });
    
    const data = await response.json();
    
    if (data.Response === "False") {
        resultsDiv.innerHTML = `<p>No results: ${data.Error}</p>`;
        return;
    }
    
    const posterImage = // Resolve image first to be posted
        data.Poster
        ? `<img class="moviePoster" src="${data.Poster}" alt="Poster for ${data.Title}">` // If condition is true
        : `<div class="no-poster">No poster</div>`; // If condition is not true
  
        resultsDiv.innerHTML = `
        <div class="movieCard">
            ${posterImage}
            <div class="movie-info">
                <h2>${data.Title} (${data.Year})</h2>
                <p><b>Type</b>: ${data.Type}</p>
                <p><b>Rated</b>: ${data.Rated}</p>
                <p><b>Genre</b>: ${data.Genre}</p>
                <p><b>Director</b>: ${data.Director}</p>
                <p><b>IMDb</b>: ${data.imdbRating}</p>
                <p><b>Plot</b>: ${data.Plot}</p>
            </div>
        </div>
    `;
});

// This funciton replaces information within the HTML DOM live without refreshing the page