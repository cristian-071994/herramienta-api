const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./modules/users/user.routes");
const sedeRoutes = require("./modules/sedes/sede.routes");

require("dotenv").config();

const PORT = process.env.PORT ?? 8001;

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Running server for tool requests");
});

app.use(userRoutes);
app.use(sedeRoutes);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
