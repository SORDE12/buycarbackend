let express = require("express");
let newCarRouter = express.Router();

const { OemModal } = require("../model/oem.model");


newCarRouter.get("/", async (req, res) => {
    let query = req.query;
    try {
      const users = await OemModal.find(query);
      res.send(users);
    } catch (err) {
      res.send({ msg: "cannot get users", err: err.message });
    }
  });
  
  module.exports={
    newCarRouter
  }