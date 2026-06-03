const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("MongoDB Connection Error: ", err));