const mongoose = require("mongoose");
const express = require("express");
var morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
morgan(':method :url :status :res[content-length] - :response-time ms')

// routes
app.use(require("./routes/apiRoutes.js"));
require("./routes/htmlRoutes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});