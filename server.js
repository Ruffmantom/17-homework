const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/apiRoutes.js"));
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});