# This is my Portfolio for 2020

## This App will track your exercises and display them on the dashboard for you to see your progress
This Homework was tough from having to start with starter code and figure out what needs to be done, to figuring out routes and api calls. I am personally still trying to understand routes and querying from the database with those api routes. I do feel like this HW did help a little. 

Thanks to my tutor for pushing me and helping me figure out the routes and Riley TA helped me complete the schema that dynamically created the info for the front page of the app.

---
### This was the code that I never in a hundred years would have though to put in the schema
---
```
 {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    }
);
// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);

```


---
##  License and Copyright 
© Tom Ruff, U of U Full Stack Bootcamp