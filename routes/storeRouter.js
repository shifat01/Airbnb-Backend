// External Module
const express = require('express');
const storeRouter = express.Router();

//Local Module
const homesController = require('../controllers/storeController');
const home = require('../models/home');

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favourites", homesController.getFavouriteList);

storeRouter.get("/homes/:homeId", homesController.getHomeDetails);

module.exports = storeRouter;