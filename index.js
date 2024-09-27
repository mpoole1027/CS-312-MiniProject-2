import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/";
var result = null;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { result: result });
});

app.get("/request", async (req, res) => {
    try{
        const response = await axios.get(`${API_URL}random.php`);
        result = response.data;
        console.log(result);
        res.redirect('/');
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: error.message,
        });
    }
});


app.listen(port,() => {
    console.log(`Server running on port ${port}.`);
});