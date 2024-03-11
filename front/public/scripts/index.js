const {renderCards, bbObject} = require("./utilities.js");
const axios = require("axios");

const getElements = async () => {
  const fetchApi = "https://students-api.2.us-1.fl0.io/movies";
  const response = await axios(fetchApi);
  const data = response.data;
  
  data.splice(1, 0, bbObject);

  renderCards(data);
};

document.addEventListener("DOMContentLoaded", () => {
  getElements();
});
