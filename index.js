import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// set the app to be an express app
// set the port to 3000
// set a variable for the api url
// set extraneous variables
const app = express();
const port = 3000;
const API_URL = "http://www.thecocktaildb.com/api/json/v1/1/";
var result = null;

// use the bodyparser middleware for the get request
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// this allows me to use the css file
app.use(express.static("public"));

// this renders the page when the website is loaded
app.get("/", (req, res) => {
    res.render("index.ejs", { result: result });
});

// this is the get request that gets called from the submit button
app.get("/request", async (req, res) => {
    // this formatting was in the udemy videos
    try{
        // use axios to get the api results
        const response = await axios.get(`${API_URL}random.php`);
        // put the response in a result variable
        result = response.data;
        console.log(result);
        // redirect back to the default url that will now have the updated result variable
        res.redirect('/');
    // catch the errors
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: error.message,
        });
    }
});

// show that the server is listening
app.listen(port,() => {
    console.log(`Server running on port ${port}.`);
});