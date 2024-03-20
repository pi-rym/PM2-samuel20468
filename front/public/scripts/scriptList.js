const {renderAllCards} = require("./utilities.js");
const axios = require("axios");

const getElements = async () => {
  try {
    const fetchApi = "http://localhost:3000/movies";
    const response = await axios(fetchApi);
    const data = response.data;

    renderAllCards(data);
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getElements();
});
