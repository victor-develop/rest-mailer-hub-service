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

## TypeScript support
This project was written in typescript. You can look for function signatures from the .d.ts.

## Development

If you want to further develop this package by your own:

```sh
  git clone <this repo github clone address>
  cd <this repo>
  npm intall
```

### Run the tests
Note that you have to to rename `./src/tests/data/secret/xxxxx.secret.exmaple.ts` back to `./src/tests/data/secret/xxxxx.secret.ts`. Then fill in your own api keys and domain settings in the files. Then you can run

```sh
  npm test
```

__Caution__: If you are using MailGun's sandbox domain, running these tests will use up your sandbox message limit pretty quickly, by that time your tests against MailGun service will __fail__, and you will see console error messages  __Error: message limit reached__

### Build 
```sh
  npm run build
```

## TODOs
 - Validate credentials of different email service providers
 - Logging and detailed error messages

## Acknowledgements

https://www.twilio.com/blog/2017/06/writing-a-node-module-in-typescript.html
