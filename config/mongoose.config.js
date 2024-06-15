const mongoose = require('mongoose');

const uri = "mongodb+srv://Luis:admin123@backendserver.m9bhizj.mongodb.net/?retryWrites=true&w=majority&appName=backEndServer";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri, clientOptions)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));