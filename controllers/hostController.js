//Local Module
// const home = require("../models/home");
const Home = require("../models/home");

// Add home on get request
exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add home to airbnb",
    editing: false,
  });
};

// Edit home on get request
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found for editing");
      return res.redirect("/host/host-home-list");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "edit your home",
      editing: editing,
    });
  });
};

// get homes for host/admin
exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes list",
    })
  );
};

// Add home on post request
exports.postAddHome = (req, res, next) => {
  console.log(req.body);
  const { houseName, price, location, photoUrl } = req.body;

  const home = new Home(houseName, price, location, photoUrl);
  home.save();

  res.redirect("/host/host-home-list");
};

// edit home on post request
exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, photoUrl } = req.body;
  const home = new Home(houseName, price, location, photoUrl);
  home.id = id;
  home.save();

  res.redirect("/host/host-home-list");
};

// delete home 
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("came to delete home");
  Home.deleteById(homeId, error => {
    if (error){
      console.log("Error while deleting", error);
      
    }
    res.redirect("/host/host-home-list");
  });
}
