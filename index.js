import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "www.thecocktaildb.com/api/json/v1/1/";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




app.listen(port,() => {
    console.log(`Server running on port ${port}.`);
});