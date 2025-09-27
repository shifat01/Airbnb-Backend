const path = require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require('../utils/pathUtil');



hostRouter.get("/add-home", (req, res, next) => {
    res.render('addHome', {pageTitle: 'Add home to airbnb'});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body.houseName);
    registeredHomes.push({houseName: req.body.houseName});
    res.render('homeAdded', {pageTitle: 'Added homes'});
});


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;