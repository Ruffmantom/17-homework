module.exports = function (app) {


    app.get("api/exercise"), ({ body }, res) => {
        res.json({
            message: "getting exersise"
        })
    }
}