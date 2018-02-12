import { makeMailerHubBuilder, ErrorTypes, Interfaces } from 'vicdotdev-mailer-hub';

const builder = makeMailerHubBuilder();
export const mailerHub = builder
.addMailGun({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
    senderAcc: process.env.MAILGUN_SENDER,
})
.addSendGrid({
  apiKey: process.env.SENDGRID_APIKEY,
  domain: process.env.SENDGRID_DOMAIN,
  senderAcc: process.env.SENDGRID_SENDER,
})
.create();
