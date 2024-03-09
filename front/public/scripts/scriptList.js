const {renderAllCards, bbObject} = require("./utilities.js");

const getElements = () => {
  const fetchApi = "https://students-api.2.us-1.fl0.io/movies";
  $.get(fetchApi, (data) => {
    data.splice(1, 0, bbObject);

    renderAllCards(data);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  getElements();
});
