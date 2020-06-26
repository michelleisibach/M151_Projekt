import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";

const app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://michel:mypassword@localhost:5432/churchappdb")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/login.html'));
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

app.post("/api/priest/", (req, res) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var age = req.body.age;
    var status = req.body.status;
    var mail = req.body.mail;
    var password = req.body.password;
    console.log(firstname, lastname, age, status, mail, password);
    res.end("yes");

    firstname = "'" +firstname+"'";
    lastname = "'" +lastname+"'";
    age = parseInt(age);
    status = "'" +status+"'";
    mail = "'" +mail+"'";
    password = "'" +password+"'";

    console.log(firstname);

    if(firstname != "" && lastname != "" && age != "" && status != "" && mail != "" && password != ""){
            db.query(
                'INSERT INTO priests(firstname, lastname, age, status, mail, pw) VALUES ('+firstname+', '+lastname+', '+age+', '+status+', '+mail+', '+password+');',
                (err, res) => {
                  console.log(err, res);
                  db.end();
                }
              );            
    }
});

app.post("/api/exhibition/", (req, res) =>{
    var eventname = req.body.eventname;
    var code = req.body.code;
    var time = req.body.date;
    var date = req.body.date;
    var pw = req.body.pw;
    res.end("yes");

    eventname = "'" +eventname+"'";
    code = "'" +code+"'";
    time = "'" +pw+"'";
    date = "'" +date+"'";
    pw = "'" +pw+"'";

    if(eventname != "" && code != "" && time != "" && date != ""){
            db.query(
                'INSERT INTO exhibitions(name, code, time, date, pw) VALUES  ('+eventname+', '+code+', '+time+', '+date+', '+pw+');',
                (err, res) => {
                  console.log(err, res);
                  db.end();
                }
              );            
    }
})

//serverlistening
app.listen(5000, () => {
    console.log("Server listening on Port 5000")
});