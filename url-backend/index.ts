import express from 'express';
import * as mongoose from 'mongoose';
import cors from 'cors';
import urlRouter from './routers/urlRouter';

const app = express();
const port = 8000;


app.use(express.json());
app.use(cors())
app.use('/link', urlRouter);

const run = async () => {
  await mongoose.connect('mongodb://localhost/url');

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  })
  process.on('exit', () => {
    mongoose.disconnect()
  })
}

run().catch((err) => {
  console.log(err)
})