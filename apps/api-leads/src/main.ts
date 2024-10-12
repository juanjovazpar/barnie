import express from 'express';

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.VITE_API_LEADS_PORT
  ? Number(process.env.VITE_API_LEADS_PORT)
  : 3000;

const app = express();

app.get('/', (_, res) => {
  res.send({ message: 'Hello API Leads' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
