const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');


const setupandStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //API for health-check
    app.get('/', (req, res) => res.send('Working'));

    app.listen(PORT, () => {
        console.log(`Server start at PORT ${PORT}`);
    })
}

setupandStartServer();