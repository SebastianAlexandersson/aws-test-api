const express = require('express');
const app = express();

app.route('/')
  .all((req, res) => {
    res.status(200).send();
  });

app.route('/node-test')
  .all((req, res) => {
    res.send(`secrets: ${process.env.USERNAME}`);
  })


app.listen(7244, () => console.log('server up on port 7244'));
