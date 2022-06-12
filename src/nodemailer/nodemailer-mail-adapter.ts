import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b463c8e49d146e",
    pass: "0eb431d84309e6",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({subject, body}: SendMailData) {
   await transport.sendMail({
    from: 'Equipe Feedget <koe@feedget.com>',
    to: 'João Vitor <ganharinsta99@gmail.com>',
    subject,
    html: body,
  }); 
 };
}
