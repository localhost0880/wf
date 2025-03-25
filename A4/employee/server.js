const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {
    const employee = req.body;
    res.render("result", { employee });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

