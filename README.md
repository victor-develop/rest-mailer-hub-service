# Restful MailerHub Api Service
This is a server with which you can use to send email via its RESTful API from the email services you predefine. 
Currently only MailGun and SendGrid are supported. It works in this way: it tries to send out your email by one of the email service providers, i.e. MailGun and SendGrid, and more in later version. If a failure is encountered, it will try another service provider until success.

This service comes with just a minimal front end, it is back-end focused. I spent pretty much time building the library.

# Cloud hosted demo

https://powerful-forest-80587.herokuapp.com

## RESTful API Documentation

In fact it has only one endpoint, which is for you to send emails. Send histories may be considered as features in the future.

I try to give the restful endpoint a noun instead of a verb 'SEND', the url was made to be `/sendmail-requests`, which means this is a resource of all your requests to send an email. For detail, see below:

https://app.swaggerhub.com/apis/victor-develop/mailer-hub-service/0.1.0

## Getting Started

 - install the package

  ```sh
    git clone <this repo>
    npm install
    mv .env.example .env
  ```
 - Now edit the `.env` file and fill your own api keys (you can sign up at MailGun and SendGrid's site) 
 - Then boot the server

  ```sh
    npm start
  ```

## Development

### Run the tests

Make sure you have a `.env` file ready, as mentioned above.

run

```sh
  npm test
```

As long as one of your email service providers is up and running, the tests should pass.

## Limitations

This service has no built-in security. You will have to roll your own security mechanisms to protect your MailerHub service from abuse.

## TODOs
 - More careful validation and provide meaningful error messages
 - Logging each time of email delivery
 - use tools like `pm2` to monitor and keep it running

## Links to other project

Not long agao I also did another code challenge before this one, which took  more days to finish. What I feel good of that project, which was missed in this project due to limited time, is the well-crafted logging feature.

 - https://github.com/victor-develop/conway-gof
