const express = require("express");
const path = require('path');
const app = express();
app.use('/', express.static(path.join(__dirname, '../dist')));

/*
app.use("/", function(request, response) {

    response.send("<h1>Главная страница</h1>");
});
*/
app.listen(8080);