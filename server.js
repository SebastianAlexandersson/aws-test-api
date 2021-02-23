const express = require('express');
const app = express();

app.route('/')
  .all((req, res) => {
    res.send(`username: ${process.env.USERNAME} password: ${process.env.PASSWORD}`);
  });

app.listen(7244, () => console.log('server up on port 7244'));
