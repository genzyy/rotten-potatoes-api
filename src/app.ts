// require statements in es6.
import express from 'express';
import * as bodyParser from 'body-parser';
import { Movie } from './db/models/Movie.model';

const app = express();

app.use(
  bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buff, encoding) {
      req.rawBody = buff;
    }
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// exporting the app function as a non-default function.
export { app };
