const sender = require('../config/emailConfig');
const TicketRepository = require('../repositories/ticket-repository')

const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, bodySubject) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: bodySubject
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({ status: "PENDING" });
        return response;
    } catch (error) {
        throw error;
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}