let express = require("express");
let carRouter = express.Router();
const { CarModal } = require("../model/car.model");
const { userModal } = require("../model/user.model");

carRouter.get("/", async (req, res) => {
  let query = req.query;
  try {
    const users = await CarModal.find(query);
    res.send(users);
  } catch (err) {
    res.send({ msg: "cannot get users", err: err.message });
  }
});

carRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newcar = new CarModal(payload);
    await newcar.save();
    res.send({msg:"created the car successfully"});
  } catch (err) {
    res.send({ msg: "not added car", err: err.message });
  }
});

carRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const useID_makingreq = req.body.userID;
  try {
    if (useID_makingreq !== userID_id_Car) {
      res.send({ "msg ": "you are not authorized" });
    } else {
      await CarModal.findByIdAndDelete({ _id: id });
      res.send({ "msg ": "car deleted successfully" });
    }
  } catch (err) {
    res.send({ msg: "not deleted car", err: err.message });
  }
});

carRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  let car = await CarModal.findOne({ _id: id });
  let userID_id_Car = car.userID;
  const useID_makingreq = req.body.userID;

  try {
    if (useID_makingreq !== userID_id_Car) {
      res.send({ "msg ": "you are not authorized" });
    } else {
      await CarModal.findByIdAndUpdate({ _id: id }, payload);
      res.send({ "msg ": "car updated" });
    }
  } catch (err) {
    res.send({ msg: "not update car", err: err.message });
  }
});

module.exports = {
  carRouter,
};
