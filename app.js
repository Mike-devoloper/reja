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

//REJA SERVERI

// const express = require("express");
// const app = express();
// const http = require("http");
// const res = require("express/lib/response");
// const fs = require("fs");
// const { type } = require("express/lib/response");


// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//         console.log("ERROR", err);
    
//     } else {
//         user = JSON.parse(data)
//     }
// });


// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// app.set("views", "views");
// app.set("view engine", "ejs");

// app.post("/create-item", function(req, res) {
//  console.log(req.body);
//  res.json({test: "success"});
// });

// app.get("/", function(req, res) {
//     res.render("harid");
// });

// app.get("/author", (req, res) => {
//     res.render("author", {user: user});
// })


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, ()=> {
//     console.log(`the server is running successfully on port ${PORT}, http://localhost:${PORT}`)
// });



// callback functions 

// console.log("Jack MA maslahatlari");

// const list = [
//     "yahshi talaba boling", //0-20
//     "togri boshliq tanlang va koproq hato qiling", //20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalardi qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", //60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null)
//     else if ( a <= 20) callback(null, list[0]);
//     else if ( a > 20 && a <= 30) callback(null, list[1]);
//     else if ( a > 30  && a <= 40) callback(null, list[2]);
//     else if ( a > 40 && a <= 50 ) callback(null, list[3]);
//     else if ( a <= 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout (function() {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// maslahatBering(20, (err, data) => {
//     if(err) console.log("ERROR", err);
//     else {
//         console.log("javob", data);
//     }
// });

// //async functionlar 

// const list2 = [
//     "yahshi talaba boling", //0-20
//     "togri boshliq tanlang va koproq hato qiling", //20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalardi qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", //60
// ];

// async function maslahatBering2(a) {
//     if (typeof a !== "number") throw new Error("insert a number")
//     else if ( a <= 20) return list2[0];
//     else if ( a > 20 && a <= 30) return list2[1];
//     else if ( a > 30  && a <= 40) return list2[2];
//     else if ( a > 40 && a <= 50 ) return list2[3];
//     else if ( a <= 50 && a <= 60) return list2[40];
//     else {
//         // return list2[5];

//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list2[5]);
//             }, 1000);
//         });
//         //promise function
//         // setTimeout (function() {
//         //     return list[5];
//         // }, 5000);
//     }
// }

// //then/catch
// // console.log("passed here 0");
// // maslahatBering2(20)
// // .then( data => {
// //     console.log("javob", data);
// // })
// // .catch(err => {
// //     console.log("error", err);
// // });

// // console.log("passed here 1");


// //promise hell dan qutulish yoli
// //async va await 
// async function run() {
//  let javob = await maslahatBering2(20);
//  console.log(javob);
// //  javob = await maslahatBering(30);
// //  console.log(javob);
// //  javob = await maslahatBering(40);
// //  console.log(javob);
 
// }

// run();





console.log("web serverimiz ishga tushdi");
const express = require("express");
const app = express();

//mongo db connection
const db = require("./server").db();
const mongodb = require("mongodb");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.set("views", "views");
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    db.collection("plans").find().toArray((err, data) => {
       if(err) {
        console.log(err);
        res.end("something went wrong");
       } else {
        res.render("reja", {items: data});
       }
    });
})

app.post("/create-item", (req, res) => {
    console.log("/user entered");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
       res.json(data.ops[0]);
       console.log(data.ops);
        
    });
})


app.post("/delete-item", (req, res) => {
 const id = req.body.id;
 console.log(id);
 db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
    res.json({state: "success"});
 })
});


module.exports = app;