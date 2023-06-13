require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Require the routes file

// const someRoutes = require("./routes/some-routes");
// const otherRoutes = require("./routes/other-routes");

// app.use("/api/some", someRoutes);
// app.use("/api/other", otherRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Started on http://localhost:" + process.env.PORT);
  console.log("Press CTRL + C to stop server");
});
