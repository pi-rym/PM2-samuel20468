const app = require("./src/app");
const connectToDb = require("./src/config/dbConnection");

const dbConnection = async () => {
  try {
    await connectToDb();
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error(`Error connecting to database: ${err}`);
  }
}

dbConnection();

