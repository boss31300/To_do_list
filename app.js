//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 



var items = ["Eat", "Sleep", "Code", "Repeat"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
  const o_date = new Intl.DateTimeFormat;
  const f_date = (m_ca, m_it) => Object({...m_ca, [m_it.type]: m_it.value});
  const m_date = o_date.formatToParts().reduce(f_date, {});
  const datetoday = (m_date.day + '-' + m_date.month + '-' + m_date.year);
  res.render("list", {newList : items, Today : datetoday});
});


app.post("/", function(req, res){
  var item=req.body.new;
  items.push(item);
  res.redirect("/");

});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
