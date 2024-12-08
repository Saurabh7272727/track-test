const express = require('express');
const path = require('path');
// const { fileURLToPath } = require('url');
// const { dirname } = require('path');
const app = express();


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

module.exports = app;