const express = require("express");
const router = express.Router();

const passport = require("passport");

//Importing contacts controller
const contactsRouter = require("../controllers/contactscontroller");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

//Get contact list route
router.get("/", contactsRouter.displayContactList);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/update/:id", requireAuth, contactsRouter.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/update/:id", requireAuth, contactsRouter.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, contactsRouter.performDelete);

module.exports = router;
