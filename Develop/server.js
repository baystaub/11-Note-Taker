const express = require("express");
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("frontend"));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening on PORT: http://localhost:${PORT}`)
);
