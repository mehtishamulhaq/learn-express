import express from 'express';
import data from './data/MOCK_DATA.json' with { type: 'json' };

const app = express();

const PORT = 3000;

// Route chaining
app
  .route('/class')
  .get((request, response) => {
    throw new Error();
    // response.send('Retrieve class info');
  })
  .post((request, response) => {
    response.send('Create class info');
  })
  .put((request, response) => {
    response.send('Update class info');
  });

// // GET
// app.get('/class', (request, response) => {
//   response.send('Retrieve class info');
// });

// // POST
// app.post('/class', (request, response) => {
//   response.send('Create class info');
// });

// // PUT
// app.post('/class', (request, response) => {
//   response.send('Update class info');
// });

// End ---> Route chaining ---->

// serving images
app.use('/images', express.static('./public/images'));

// using express.json exprress.urlencoded
// app.use(express.json());
app.use(express.urlencoded());

// POST express.json and exprress.urlencoded
app.post('/item', (request, response) => {
  console.log(request.body);
  response.send(request.body);
});
// GET
app.get('/', (request, response) => {
  response.json(data);
});

// GET - dowload method
app.get('/download', (request, response) => {
  response.download('./public/images/mountains.jpeg');
});

// GET
app.get('/redirect', (request, response) => {
  response.redirect('https://my-portfolio-silk-eta-21.vercel.app/');
});

// GET with next
app.get(
  '/next',
  (request, response, next) => {
    console.log('The respose will be sent by the next function');
    next();
  },
  (request, response) => {
    response.send('Rout with a second callback');
  },
);

// GET with routing params
app.get('/class/:id', (request, response) => {
  const studentId = Number(request.params.id);

  const student = data.filter((student) => student.id === studentId);

  response.send(student);
});

// POST
app.post('/create', (request, response) => {
  response.send('This is a post request at /create');
});

// PUT
app.put('/update', (request, response) => {
  response.send('This is a put request at /update');
});

// DELTETE
app.delete('/delete', (request, response) => {
  response.send('This is a delete request at /delete');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
