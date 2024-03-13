const { renderAllCards, bbObject } = require("./utilities.js");
const axios = require("axios");

const getElements = async () => {
  try {
    const fetchApi = "https://students-api.up.railway.app/movies";
    const response = await axios(fetchApi);
    const data = response.data;

    data.splice(1, 0, bbObject);

    renderAllCards(data);
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getElements();
});
