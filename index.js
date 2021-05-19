const express = require('express');
const uuid = require('uuid');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const requestId = uuid.v4();
  console.log(`[${requestId}] [request] path = ${req.path}`);

  const delaySec = req.query.delay || 0;

  setTimeout(() => {
    console.log(`[${requestId}] [response]`);
    res.send('Hello World!');
  }, delaySec * 1000);
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const signals = ['SIGTERM', 'SIGINT']

signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`Received ${signal}...`);

    setTimeout(() => {
      server.close();
    }, 3000);
  });
});
