const mailerHub = {
  send: (mail) => axios.post('/sendmail-requests', mail)
}

const mailApp = new Vue({
  el:"#app",
  data: {
    mail: {
      to: 'mailerhub.a@mailinator.com',
      cc: '',
      bcc: '',
      subject: 'Try to submit this request',
      text: 'Mailinator is a public domain mailbox serivice. Good for testing!'
    },
    notices: []
  },
  methods: {
    send() {
      const self = this;
      mailerHub.send(this.mail)
        .then(res => {
          alert(res.data.message);
        })
        .catch(res => {
          alert('Error: ' + res.response.data.message);
        });
    }
  }
})