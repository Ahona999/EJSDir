const express = require ("express");
const app = express();

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");// ejs is not required here because it is a part of express() and already required.

app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data)
    if (data) {
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
});


app.get("rolldice", (req,res)=>{
    let diceVal = Math.floor(Math.random() *6) + 1;
    res.render("rolldice.ejs", {num : diceVal});
});

app.listen(port, () =>{
    console.log(`App listening on port number: ${port}`);
});