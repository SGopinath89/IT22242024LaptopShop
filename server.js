const express = require("express");
const PORT = 8000;
//REST object
const app = express();

//REST API
app.get("/", (req, res) => {
  res.send({ message: "Welcome To The GalaxyEra Laptop  Store" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
