// console.log("web serverini boshlash");
// const express = require("express");
// const app = express();
// const http = require("http");
// // 1
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// //2 
// app.set("views", "views");
// app.set("view engine", "ejs");


// //3
// app.get("/", function(req, res) {
//     res.end(`<h1 style="background-color:red;">hello world by mike</h1>`);
// });

// app.get("/gift", function(req, res) {
//     res.end(`<h1 style="background-color:red;">welcome to the page of gifts</h1>`);
// });


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`the server is running successfully on ${PORT}`);

// });

const express = require("express");
const app = express();
const http = require("http");
const res = require("express/lib/response");
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    
    } else {
        user = JSON.parse(data)
    }
});


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", function(req, res) {
 console.log(req.body);
 res.json({test: "success"});
});

app.get("/", function(req, res) {
    res.render("harid");
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, ()=> {
    console.log(`the server is running successfully on port: ${PORT}`)
});