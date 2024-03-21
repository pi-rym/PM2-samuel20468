const axios = require("axios");

const movieForm = document.querySelector(".form");

const resetForm = () => movieForm.reset();

const validateForm = async (e) => {
  e.preventDefault();
  let isValid = true;

  const movieInputs = document.querySelectorAll(".input");
  const createButton = document.querySelector(".submit");

  movieInputs.forEach((input) => {
    if (!input.value) {
      isValid = false;
      input.nextElementSibling.textContent =
        "Todos los campos son obligatorios";
    } else {
      input.nextElementSibling.textContent = "";
    }
  });

  const movieSelect = document.querySelector(".select");
  const selectedOption = document.querySelector(".select option:checked");

  if (!selectedOption) {
    isValid = false;
    movieSelect.nextElementSibling.textContent =
      "Debes seleccionar al menos una opción";
  } else {
    movieSelect.nextElementSibling.textContent = "";
  }

  if (!isValid) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El formulario tiene campos vacíos, revisalos",
      confirmButtonColor: "rgb(181, 18, 27)",
    });
  } else if (isValid) {
    createButton.disabled = true;
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    await Toast.fire({
      icon: "success",
      title: "Película creada correctamente",
    });
    createButton.disabled = false;
  }

  if (isValid) {
    const newMovie = {};

    movieInputs.forEach((input) => {
      newMovie[input.name] = input.value;
    });

    const selectedGenres = [
      ...document.querySelectorAll(".select option:checked"),
    ].map((option) => option.value);

    newMovie.genre = selectedGenres;

    postMovie(newMovie);
  }
};

const postMovie = async (objMovie) => {
  try {
    const URL_API = "http://localhost:3000/movies/create-movie";
    const response = await axios.post(URL_API, objMovie);
    console.log("hola" + response.data.error);

    resetForm();
  } catch (error) {
    console.error("chau" + error.response.data.error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Error al crear la película: ${error.response.data.error}`,
      confirmButtonColor: "rgb(181, 18, 27)",
    });
  }
};

movieForm.addEventListener("submit", (e) => validateForm(e));
