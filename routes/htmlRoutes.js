var path = require("path");

module.exports = function (app) {
    // route for exercise page
    app.get("/exercise", (req, res, ) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });
    // route for Stats page
    app.get("/stats", (req, res, ) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

};


