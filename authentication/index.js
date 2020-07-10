const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const v1Routes = require('./routes/v1');

mongoose.connect("mongodb://127.0.0.1:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
});


const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", v1Routes);

app.use("*", (__,res) => {
    res.render("404", {pageTitle: "Page Not Found"});
});

app.listen(PORT, () => console.log("Listening at port: 3000"));