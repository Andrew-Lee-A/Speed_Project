//import modules
const express = require('express')
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();

// db
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));

//route
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);

