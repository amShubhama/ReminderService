const TicketService = require('../services/email-service');


const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully registered an email remainder'
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Failed to register an email remainder'
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await TicketService.fetchPendingEmails();
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched remainders'
        });
    } catch (error) {
        throw error;
    }
}

const sendEmails = async (req, res) => {
    try {
        return res.send("Not implemented");
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    sendEmails
}