const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/app', express.static('front_end'));

app.listen(PORT, function() {
    console.log("Listening for requests");
});
