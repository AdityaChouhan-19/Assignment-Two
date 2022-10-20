const express = require("express");
const router = express.Router();

//Importing contacts controller
const contactsRouter = require("../controllers/contactscontroller");

//Get contact list route
router.get("/", contactsRouter.displayContactList);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/update/:id", contactsRouter.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/update/:id", contactsRouter.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", contactsRouter.performDelete);

module.exports = router;
