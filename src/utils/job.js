const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');
/**
 * 10:00 am
 * Every 5 minutes
 * We will check are there any pending emails which was expected to be sent
 * by now and is pending
 */

const setupJobs = () => {
    console.log("Called!");
    cron.schedule('*/1 * * * *', async () => {
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to: email.recipientEmail,
                text: email.content,
                subject: email.subject,
            }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    const response = await emailService.updateTicket(email.id, { status: "SUCCESS" });
                    console.log(response);
                }
            });
        });
    });
}

module.exports = setupJobs;