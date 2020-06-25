import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";

const app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://michel:mypassword@localhost:5432/churchappdb")
app.use(bodyParser.json());

//generate Session
app.use(expressSession({
    secret: "onlinechurchsession",
    resave: false,
    saveUnitialized: true
}));

//use default assets like stylesheet etc...
app.use("/assets", express.static(path.join(__dirname, "/../frontend/assets")));
app.use(express.json());

//frontend --> send html files for navigation/links
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/index.html'));

    db.any('SELECT * FROM exhibitions')
    .then(function(data){
        console.log("DATA:", data);
    });

    db.any('SELECT * FROM priests')
    .then(function(data){
        console.log("DATA:", data);
    });
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/admin.html'));
});

app.get("/messeliste", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/messeliste.html'));
});

//get exhibitions with the id
app.get("/messe/:id", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/messe.html'));
});

app.get("/priests", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/priests.html'));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname+ '/../frontend/html/contact.html'));
});

app.get("/aboutus", (req, res) => {
    res.sendFile(path.join(__dirname+ '/../frontend/html/aboutus.html'));
});


//api to get data from servers.

app.get("/api/exhibitions/get", (req, res) => {
    //code von der DB und einem json --> correct 
    db.any('SELECT * FROM exhibitions')
        .then(function(data){
            const myObjStr = JSON.stringify(data);
            console.log("DATA:", data.value);
            console.log("DATA JSON:", JSON.parse(myObjStr));
            res.json(myObjStr);
        });
});

app.get("/api/exhibitions/get/:id", (req, res) => {
    //get specific exhibition --> correct
    db.any('Select * FROM exhibitions WHERE "ID"')
        .then(function(data){
            console.log("DATA:", data.value);
            /* if the id is correct, the user will be connected to an external site. */
        });
}); 

app.get("/api/priests/get", (req, res) => {
    db.any('SELECT * FROM priests')
        .then(function(data){
            const myObjStr = JSON.stringify(data);
            res.json(myObjStr);
        });
});

app.post("/api/exhibition/:id", (req, res) => {
    //create new exhibition --> send the parameters in the header and cut it open here and insert it into the DB
});

//serverlistening
app.listen(5000, () => {
    console.log("Server listening on Port 5000")
});