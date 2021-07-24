const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})