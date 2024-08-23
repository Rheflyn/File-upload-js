const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index-post.html'));
});

app.post('/process_post', urlencodedParser, function (req, res) {
    const response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    console.log(response);

    res.end(JSON.stringify(response));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
