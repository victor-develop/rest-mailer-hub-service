import * as supertest from 'supertest';
import { startServer, resource } from '../server';
import { IHubMail } from 'vicdotdev-mailer-hub/dist/interfaces';
import * as HttpStatus from 'http-status-codes';

const defaultPort = 8080;
const port = process.env.PORT || defaultPort;
const server = startServer(port);
const agent = supertest.agent(`http://localhost:${port}`);

describe('send email by POST to /sendmail-requests', () => {
  const email = {
    to: 'mailnator.a@mailinator.com',
    subject: 'How are you tester',
    text: 'explain in paragraph',
  };

  it('succeeds', (done) => {
    agent
    .post(`/${resource}`)
    .send(email)
    .expect(HttpStatus.ACCEPTED)
    .end((err,res) => {
      done(err);
    });
  });
});

describe('send nothing by POST to /sendmail-requests', () => {
  it('return bad request', (done) => {
    agent
    .post(`/${resource}`)
    .send()
    .expect(HttpStatus.BAD_REQUEST)
    .end((err,res) => {
      done(err);
    });
  });
});
