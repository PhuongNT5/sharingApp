const nodemailer = require('nodemailer');
import { IEmailService } from '../IServices';

class EmailService implements IEmailService {
    private static instance: EmailService;
    private constructor() {

    }
    static getInstance() {
        if (!EmailService.instance) {
            EmailService.instance = new EmailService();
        }
        return EmailService.instance;
    }

    sendEmail(toEmails: string, content: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'abc@gmail.com',
                    pass: 'abc123'
                }
            });

            const mailOptions = {
                to: toEmails,
                subject: 'Reset password Sharing App',
                text: content
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return reject(error);
                } else {
                    console.log(info);
                    return resolve(info);
                }
            });
        });
    }
}
export const EmailServiceInstance = EmailService.getInstance();
