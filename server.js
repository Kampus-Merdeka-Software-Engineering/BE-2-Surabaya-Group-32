'use strict'
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static(process.cwd() + '/assets'));

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/app');
app.set('view engine', 'html');

require("./js/route.js")(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
