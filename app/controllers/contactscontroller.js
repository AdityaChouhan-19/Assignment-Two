const express = require("express");
const router = express.Router();

//const mongoose = require("mongoose");

//Connect to the contacts model
const Contact = require("../models/contacts");

module.exports.displayContactList = (req, res, next) => {
  Contact.find((err, contcatList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(ContcatList);
      res.render("contacts/contactlist", {
        title: "Contact List",
        ContactList: contcatList,
      });
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("contacts/update", {
        title: "Edit Contact",
        contact: contactToEdit,
        //displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedContact = Contact({
    _id: id,
    contactname: req.body.name,
    contactnumber: req.body.number,
    contactemail: req.body.email,
  });

  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contactlist");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/contactlist");
    }
  });
};
