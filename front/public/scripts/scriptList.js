// newScriptList.js
document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.querySelector('.list-container');
  
    tempData.forEach((movieData) => {
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
  });
  