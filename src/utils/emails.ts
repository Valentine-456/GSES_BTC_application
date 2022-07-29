import {createTransport} from "nodemailer";

const nodemailer = createTransport({
    host: "smtp.sendgrid.net",
    port: 25,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
    tls: {
        rejectUnauthorized: false
    }
})

interface IMailOptions {
    to: string,
    text?: string,
    html?: string,
    subject: string,
}

const sendMail = async(opts: IMailOptions) => nodemailer.sendMail({ ...opts, from: process.env.EMAIL_FROM })

export {sendMail}