import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";

const app = express();
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://root:mypassword@localhost:5432/churchappdb")
app.use(bodyParser.json());
//generate Session
app.use(expressSession({
    secret: "cookie",
    resave: false,
    saveUnitialized: true
}));
//use default assets like stylesheet etc...
app.use("/assets", express.static(path.join(__dirname, "/../frontend/assets")));
app.use(express.json());

//frontend
app.get("/", (req, res) => {
   
 /*   db.one("SELECT $1 AS value", 123)
                .then(function (data) {
                        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });*/

    res.sendFile(path.join(__dirname + '/../frontend/html/index.html'));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/admin.html'));
});

app.get("/messeliste", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/messeliste.html'));
});

app.get("/messe", (req, res) => {
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


//serverlistening
app.listen(5000, () => {
    console.log("Server listening on Port 5000")
});