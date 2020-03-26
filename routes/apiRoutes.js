var db = require("../models");
var Router = require("express").Router();


// getting all the workouts
Router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
        .then(function (workouts) {
            res.json(workouts);
            console.log(workouts);
        })
        .catch(function (error) {
            res.json(error)

        });
});

Router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .then(function (workouts) {
            res.json(workouts);
            console.log(workouts)
        })
        .catch(function (error) {
            res.json(error)

        });
});
Router.post("/api/workouts", function (req, res) {
    db.Workout.create({})
        .then(function (workouts) {
            res.json(workouts);
            console.log(workouts)
        })
        .catch(function (error) {
            res.json(error)

        });
});
Router.put("/api/workouts/:id", function ({ body, params }, res) {
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then(function (data) {
            res.json(data)
        })
        .catch(function (error) {
            res.json(error)
        });

});


module.exports = Router;