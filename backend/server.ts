import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";

const app = express();
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
    res.sendFile(path.join(__dirname + '/../frontend/html/index.html'));
});

//serverlistening
app.listen(8080, () => {
    console.log("Server listening on Port 8080")
});