const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs")
const port = process.env.PORT || 8000;

//indexing page
const publicPath = path.join(__dirname,"../public");
app.use(express.static(publicPath));

const templatesPath = path.join(__dirname,"../templates/views")
app.set("views",templatesPath)

//Partials-
const PartialsPath = path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
hbs.registerPartials(PartialsPath); 

//routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.send("404 page not found");
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});