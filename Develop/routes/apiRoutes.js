const path = require(`path`);
const dbUtils = require(path.join(__dirname, `../db/data`));

const db = path.join(__dirname, `../db/db.json`);

handleApiRoutes = (app) => {
    app.get(`/api/notes`, (req, res) => {
        res.sendFile(db);
    });

    app.post(`/api/notes`, (req, res) => {
        const note = req.body;
        note.id = dbUtils.generateId();
        dbUtils.readFromDb(db).then(data => {
            data.push(note);
            dbUtils.writeToDb(db, JSON.stringify(data));
            res.json(note);
        });
    });

    app.delete(`/api/notes/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        dbUtils.readFromDb(db).then(data => {
            const newData = data.filter((item) => {if (item.id !== id) return true;});
            dbUtils.writeToDb(db, JSON.stringify(newData));
            res.json({ ok: true });
        });
    });
};

module.exports = handleApiRoutes;