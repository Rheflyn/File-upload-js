const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the destination directory for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original name of the file
    }
});

const upload = multer({ storage: storage });

// Serve the index.html file at the root URL
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload POST requests
app.post('/uploads', upload.single('myFile'), function(req, res) {
    if (!req.file) {
        return res.end("Error: No file uploaded.");
    }

    // Log file details to the console
    console.log(req.file);

    // Send the success message back to the client
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

// Start the server on port 2000
app.listen(2000, function() {
    console.log("Server is running on http://127.0.0.1:2000");
});
