const axios = require("axios");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/app', express.static('front_end'));

app.listen(PORT, function() {
    console.log("Listening for requests");
});

app.post("/api/movie", async (req, res) => {

    const { title, year, type } = req.body;
    const apiKey = "ad9d8249";

    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: apiKey,
            t: title,
            y: year,
            type: type
        }
    });

    res.json(response.data);

    }
);

app.post("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Backend received data",
        received: req.body
    });
});
