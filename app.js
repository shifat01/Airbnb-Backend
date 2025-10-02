// Core Modules
const path = require('path');

// External Modules
const express = require('express');

// Local Modules
const storeRouter = require('./routes/storeRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const errorsController = require('./controllers/errors');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host",hostRouter);


app.use(errorsController.pageNotFound);

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server is running at http://localhost:${PORT}`);
});