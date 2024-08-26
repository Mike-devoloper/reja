
const http = require("http");
const mongodb = require("mongodb");
let db;
const connectionString = "mongodb+srv://Mike:WRn0CTSIo3yTc7Ij@cluster0.u5tda.mongodb.net/Reja";
mongodb.connect(
    connectionString, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, 
(err, client) => {
   if(err)  console.log("ERROR is occured", err);

   else {
    module.exports = client;
    console.log("Database connection is successfully occured");
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function() {
    console.log("web server is succesfull running on ", PORT, `http://localhost:${PORT}`);
});
 }
});

