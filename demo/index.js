const express = require("express");
const app = express();
const port = 3000;

// INFO: Define a Route for root
app.get("/", (req, res) => {
  res.send("Hello From Node.js app");
});

// INFO: Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
