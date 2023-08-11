const express = require("express");
const app = express();
const cors = require("cors");

const routes = require('./controller/user-controller');
app.use(routes)

// app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:4200/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(express.json());
app.use(cors(corsOptions));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur ecoute sur le port: ${PORT}.`);
});




