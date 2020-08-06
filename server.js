const express = require(`express`);
const path = require(`path`);

const PORT = process.env.PORT || 8080;

const app = express();

//set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up the express app to serve static files (without this index.js and styles.css won't be served)
app.use(express.static(path.join(__dirname, `public`)));

//handle API and HTML routes
require(`./routes/apiRoutes`) (app);
require(`./routes/htmlRoutes`) (app);


//start server 
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});
