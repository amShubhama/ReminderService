const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');

const setupandStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //API for health-check
    app.get('/', (req, res) => res.send('Working'));
    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server start at PORT ${PORT}`);
        jobs();
        console.log(new Date());
    })
}

setupandStartServer();