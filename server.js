const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Mike:WRn0CTSIo3yTc7Ij@cluster0.u5tda.mongodb.net/Reja"
mongodb.connect(
    connectionString, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
    (err, client) => {
    if(err) console.log("ERROR on connection mongodb");
    else {
        // console.log(client);

        console.log("connection successfully connected to mongodb");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
       let PORT = 3000;
       server.listen(PORT, ()=> {
       console.log(`the server is running successfully on port ${PORT}, http://localhost:${PORT}`)
});
    }
}
)
