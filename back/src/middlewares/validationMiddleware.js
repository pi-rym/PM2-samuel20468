const yup = require("yup");

const validateMovie = (req,res, next) => {
    const {title, year, director, duration, genre, rate, poster} = req.body

    const schema = yup.object().shape({
        title: yup
            .string("El titúlo de la película debe ser una cadena de texto")
            .required("El título de la película es requerido"),
        year: yup 
            .number("El año de publicación debe ser númerico")
            .min(1895, "No hay registro de películas antes de este año")
            .max(2024, "La película no puede estar en el futuro")
            .integer("El año de publicación debe ser un número entero")
            .required("El año de publicación es requerido"),
        director: yup
            .string("El director debe ser una cadena de texto")
            .matches(/^[A-Za-z\s]+$/, "Nombre del director solo permite letras y espacios")
            .min(3, "Ingresa el nombre completo del director")
            .max(30, "El nombre del director excede el máximo de carácteres admitidos")
            .required("El director es requerido"),
        duration: yup
            .string()
            .matches(/^\d+h\s+\d+min$/, "El formato de la duración debe ser 'Xh Ymin'")
            .required("La duración es requerida"),
        genre: yup
            .array("El género debe ser un Array")
            .of(yup.string())
            .min(1, "Debes seleccionar por lo menos un género")
            .required("El género es requerido"),
        rate: yup
            .number("La calificación debe ser numerica")
            .min(1, "La calificación mínima es 1")
            .max(10, "La calificación máxima es 10")
            .required("La calificación es requerida"),
        poster: yup
            .string()
            .url("EL poster debe contener una URL válida")
            .required("El poster es requerido")
            
    });
    schema
        .validate({title, year, director, duration, genre, rate, poster})
        .then(() => next())
        .catch((error) => {
            return next({message: error.message, statusCode: 400})
        });
};

module.exports = validateMovie;
