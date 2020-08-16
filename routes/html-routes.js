// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the user page
    if (req.user) {
      res.redirect("/blog");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //TODO: returning user login
  app.get("/login", (req, res) => {
    // If the user already has an account send them to the user page
    if (req.user) {
      res.redirect("/blog");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  //TODO: signup login
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the user page
    if (req.user) {
      res.redirect("/blog");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/blog", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });
  // volunteer blog view
  app.get("/volunteer-dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/x.html"));
  });

  // npo blog view
  app.get("/npo-dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/profile-manage.html"));
  });

  // route for project page :projectID
  app.get("/project", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newproject.html"));
  });
};
