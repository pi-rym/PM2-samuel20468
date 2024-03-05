document.addEventListener('DOMContentLoaded', () => {
  const movieContainer = document.querySelector('.movie-container');

  // Utiliza slice(0, 3) para obtener solo los primeros tres elementos
  tempData.slice(0, 3).forEach((movieData) => {
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
});
