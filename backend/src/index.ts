import express from 'express';
import cors from 'cors';
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());


app.get('/roll', (_req, res) => {
  res.send('damn tide')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})