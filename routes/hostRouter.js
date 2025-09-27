const path = require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require('../utils/pathUtil');



hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body.houseName);
    registeredHomes.push({houseName: req.body.houseName});
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;