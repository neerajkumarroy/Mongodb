const express = require("express");
const multer = require("multer");
const app = express();


/* MULTER FUNCTION */
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads");
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg");
        }
    })
}).single("file_name");


app.post("/upload", upload, (req, res) => {
    res.send("File uploaded"); 
});

app.listen(7000);
