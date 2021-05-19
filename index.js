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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM...');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT...');
}
