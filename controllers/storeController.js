//Local Module
const Home = require('../models/home');


// get index page
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home"
    })
  );
};

// get registered homes
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes list"
    })
  );
};

// get bookings homes
exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/bookings", {
      registeredHomes: registeredHomes,
      pageTitle: "bookings"
    })
  );
};

// get favourite list 
exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "favourite list"
    })
  );
};


// get home details 
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, home => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else{
      res.render("store/home-detail", {
      home: home,
      pageTitle: "home detail"
    });
    }
    
  })
  
};