const sender = require('../config/emailConfig');


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

module.exports = {
    sendBasicEmail,
}