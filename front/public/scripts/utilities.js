const utilitiesFunctions = {
  bbObject: {
    title: "Breaking Bad",
    year: 2008,
    director: "Vince Gilligan",
    duration: "2d 13h",
    genre: ["Crime drama", "Suspense", "Thriller"],
    rate: 9.5,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx",
  },
  renderAllCards: (movieList) => {
    const listContainer = document.querySelector(".list-container");
    movieList.forEach((movieData) => {
      const { title, year, director, duration, genre, rate, poster } =
        movieData;

      const movieDetail = document.createElement("div");
      movieDetail.classList.add("movie-detail");

      movieDetail.innerHTML = `
            <div class="movie-poster">
              <img src="${poster}" alt="${title}">
            </div>
            <div class="movie-info">
              <h3>${title} (${year})</h3>
              <p>Director: ${director}</p>
              <p>Duration: ${duration}</p>
              <p>Genre: ${genre.join(", ")}</p>
              <div class="rating"><p> ⭐${rate}</p></div>
            </div>
          `;

      listContainer.appendChild(movieDetail);
    });
  },
  renderCards: (movieList) => {
    const movieContainer = document.querySelector(".movie-container");

    movieList.slice(0, 3).forEach((movieData) => {
      const { title, year, director, duration, genre, rate, poster } =
        movieData;

      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");

      movieCard.innerHTML = `
          <img src="${poster}" alt="${title}">
          <a href="">
              <h3>${title} (${year})</h3>
          </a>
          <p>Director: ${director}</p>
          <p>Duration: ${duration}</p>
          <p>Genre: ${genre.join(", ")}</p>
          <p>Rate: ${rate}</p>
        `;

      movieContainer.appendChild(movieCard);
    });
  },
};

module.exports = utilitiesFunctions;
