//Local Module
const Home = require('../models/home');

// Add home on get request
exports.getAddHome = (req, res, next) => {
    res.render('host/addHome', {pageTitle: 'Add home to airbnb'});
}

// Add home on post request
exports.postAddHome = (req, res, next) => {
    console.log(req.body);
    const {houseName, price, location, photoUrl} = req.body;

    const home = new Home(houseName, price, location, photoUrl);
    home.save();

    res.render('host/homeAdded', {pageTitle: 'Added homes'});
}

// get registered homes
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home"
    })
  );
};

exports.registeredHomes = this.registeredHomes;