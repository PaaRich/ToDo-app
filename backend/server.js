const app = require("./app");
const mongoose = require("mongoose");
const CustomErrorHandler = require("./Utils/CustomErrorHandler");

mongoose
  .connect(process.env.DATABASE_URL)
  .then((response) => {
    app.listen(process.env.PORT, () =>
      console.log(`Listening no ${process.env.PORT}`)
    );
    console.log("Connected to database");
  })
  .catch((err) => new CustomErrorHandler(err.message, 200));
