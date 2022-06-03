const express  = require("express");
const bodyParser = require("body-parser");
let items = ["eat", "slepp"];


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.get("/", (req, res) =>{
    let today = new Date();
    let option = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long'
    }

    let day = today.toLocaleDateString("en-us", option);

    res.render("lists", {kindOFDay: day,  newitems: items});
});
app.post("/", (req, res) =>{
    newItem = req.body.additem;
    items.push(newItem);
    res.redirect("/");

});

app.listen(3000,  (req, res) => {
    console.log("server on 3000")
});