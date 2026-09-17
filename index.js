import express from 'express';
import { indexRoutes, classRoutes, itemRoutes } from './routes/index.js';

const app = express();

const PORT = 3000;

// serving images
app.use('/images', express.static('./public/images'));

// using express.json exprress.urlencoded
// app.use(express.json());
app.use(express.urlencoded());

app.use('/', indexRoutes);
app.use('/class', classRoutes);
app.use('/item', itemRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
