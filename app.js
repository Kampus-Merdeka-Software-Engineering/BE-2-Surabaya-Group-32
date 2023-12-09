const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () =>{
    console.log(`example app listing on port http://localhost:${port}`);
})