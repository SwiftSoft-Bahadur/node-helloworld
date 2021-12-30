const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send({Message:"Hellow world Application"});
});

app.listen(8080, () => console.log("Listing.."));