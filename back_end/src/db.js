const mongoose = require("mongoose");
const dbURL = "mongodb://127.0.0.1:27017/student";
mongoose.connect(dbURL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB!!!");
});
