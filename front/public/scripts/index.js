  const movieContainer = document.querySelector('.movie-container');
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

  const getElements = async () => {
    const fetchApi = "https://students-api.2.us-1.fl0.io/movies";
    const response = await fetch(fetchApi);
    const data = await response.json();
    data.splice(1, 0, bbObject);
    console.log(data);

    renderCards(data);
  }
  // Utiliza slice(0, 3) para obtener solo los primeros tres elementos
  const renderCards = movieList => {

    movieList.slice(0, 3).forEach((movieData) => {
      const { title, year, director, duration, genre, rate, poster } = movieData;

      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
        <img src="${poster}" alt="${title}">
        <a href="">
            <h3>${title} (${year})</h3>
        </a>
        <p>Director: ${director}</p>
        <p>Duration: ${duration}</p>
        <p>Genre: ${genre.join(', ')}</p>
        <p>Rate: ${rate}</p>
      `;

      movieContainer.appendChild(movieCard);
    });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    getElements();
  });


