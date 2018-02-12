import * as express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import * as HttpStatus from 'http-status-codes';
import { mailerHub } from '../mailer-hub';
import { ErrorTypes } from 'vicdotdev-mailer-hub';
import { standardMessage } from '../standatd-message';
import { Router } from 'express';


const router = express.Router();

export const resourceToken = 'sendmail-requests';

const headers: RequestHandler = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

const validation: RequestHandler = (req, res, next) => {
  if (req.body === undefined) {
    res.status(HttpStatus.BAD_REQUEST)
      .send({ message: 'Email body cannot be empty.' });
  } else {
    next();
  }
};

const processSend: RequestHandler = (req, res) => {
  res.contentType('application/json');
  const mail = req.body;
  mailerHub.send(mail).then(() => {
    res.status(HttpStatus.ACCEPTED)
    .send({ message: 'send-email request was created and executed successfully' });
  })
  .catch((err) => {
    if (err instanceof ErrorTypes.IncompleteMailError) {
      res.status(HttpStatus.BAD_REQUEST)
        .send({ message: err.message });
    } else if (err instanceof ErrorTypes.AllMailerFailError) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'No available email service provider at the momemnt' });
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send(standardMessage(HttpStatus.INTERNAL_SERVER_ERROR));
    }
  });
};

router.post('/'+resourceToken, headers, validation, processSend);

export const resourceRouter: Router = router;
