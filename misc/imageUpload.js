// server.js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Set storage engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("myImage"); // 'myImage' should match the input name in the form

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Set up the upload route
const uploadFunc = async (req, res) => {
  await upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    } else {
      if (req.file == undefined) {
        return res.status(400).json({ error: "No file selected!" });
      } else {
        // Send back the file path
        res.json({ filePath: `/${req.file.path}` });
      }
    }
  });
};
