  const listContainer = document.querySelector('.list-container');
  const bbObject = {
    title: "Breaking Bad",
    year: 2008,
    director: "Vince Gilligan",
    duration: "2d 13h",
    genre: ["Crime drama", "Suspense", "Thriller"],
    rate: 9.5,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx",
  };

  const getElements = () => {
    const fetchApi = "https://students-api.2.us-1.fl0.io/movies";
    $.get(fetchApi, data => {
      data.splice(1, 0, bbObject);

      renderCards(data);
    })
  }
  // Utiliza slice(0, 3) para obtener solo los primeros tres elementos
  const renderCards = movieList => {
    movieList.forEach((movieData) => {
      const { title, year, director, duration, genre, rate, poster } = movieData;
  
      const movieDetail = document.createElement('div');
      movieDetail.classList.add('movie-detail');
  
      movieDetail.innerHTML = `
        <div class="movie-poster">
          <img src="${poster}" alt="${title}">
        </div>
        <div class="movie-info">
          <h3>${title} (${year})</h3>
          <p>Director: ${director}</p>
          <p>Duration: ${duration}</p>
          <p>Genre: ${genre.join(', ')}</p>
          <div class="rating"><p> ⭐${rate}</p></div>
        </div>
      `;
  
      listContainer.appendChild(movieDetail);
    });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    getElements();
  });



  