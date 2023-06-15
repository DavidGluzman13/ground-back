// Require the routes file

// const someRoutes = require("./routes/some-routes");
// const otherRoutes = require("./routes/other-routes");

// app.use("/api/some", someRoutes);
// app.use("/api/other", otherRoutes);

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const userRoutes = require("./routes/user-routes");

// all users routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
