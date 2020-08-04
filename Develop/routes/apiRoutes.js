const path = require(`path`);
const dbUtils = require(path.join(__dirname, `../db/data`));

const db = path.join(__dirname, `../db/db.json`);

const { allowedNodeEnvironmentFlags } = require("process");
const { fstat } = require("fs");

handleApiRoutes = (app) => {
    app.get(`/api/notes`, (req, res) => {
        res.sendFile(db);
    });

    app.post(`/api/notes`, (req, res) => {
        console.log(typeof(req.body));
        dbUtils.writeToDb(db, JSON.stringify(req.body));
    });
};

module.exports = handleApiRoutes;