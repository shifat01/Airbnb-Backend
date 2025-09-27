const path = require('path');

const express = require('express');

const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));


app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);


app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found'}); 
    
});

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server is running at http://localhost:${PORT}`);
});