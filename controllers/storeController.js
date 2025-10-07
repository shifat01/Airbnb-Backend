//Local Module
const Favourite = require("../models/favourite");
const Home = require("../models/home");

// get index page
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home",
    })
  );
};

// get registered homes
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes list",
    })
  );
};

// get bookings homes
exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/bookings", {
      registeredHomes: registeredHomes,
      pageTitle: "bookings",
    })
  );
};

// get favourite list
exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
      });
    });
  });
};

// post add to favourite
exports.postAddToFavourite = (req, res, next) => {
  console.log("Came to add to favourite", req.body);
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite", error);
    }
    res.redirect("/favourites");
  });
};

// get home details
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Looking for home with ID:", homeId);

  Home.findById(homeId, (home) => {
    console.log("Home Details found", home);
    if (!home) {
      console.log("Home not found with ID:", homeId);
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "home detail",
      });
    }
  });
};
