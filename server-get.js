const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/process_get', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };

    console.log(response);

    res.end(JSON.stringify(response));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});