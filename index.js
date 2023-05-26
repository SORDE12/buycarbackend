const { connection } = require("./config/db");

let express = require("express");
let cors = require("cors");
let { dealerRouter } = require("./routes/Dealer.route");
let { carRouter } = require("./routes/Car.route");
const { authanticate } = require("./middleware/authantification");
let app = express();
require("dotenv").config();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("this is car page");
});

app.use("/dealers", dealerRouter);

app.use(authanticate);
app.use("/car", carRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log("not connected to db");
  }
  console.log(`run on port ${process.env.port}`);
});
