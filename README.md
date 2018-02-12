# Restful MailerHub Api Service
This is a server with which you can use to send email via its RESTful API from the email services you predefine. 
Currently only MailGun and SendGrid are supported. It works in this way: it tries to send out your email by one of the email service providers, i.e. MailGun and SendGrid, and more in later version. If a failure is encountered, it will try another service provider until success.

## RESTful API Documentation
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

## TypeScript
This project was written in typescript. 

## Development

### Run the tests
Make sure you have a `.env` file ready, as mentioned above.

run

```sh
  npm test
```

As long as one of your email service providers is up and running, the tests should pass.


## TODOs
 - Validate credentials of different email service providers
 - Logging and detailed error messages

## Acknowledgements

https://www.twilio.com/blog/2017/06/writing-a-node-module-in-typescript.html
