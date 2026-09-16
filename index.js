import express from 'express';
import data from './data/MOCK_DATA.json' with { type: 'json' };

const app = express();

const PORT = 3000;

// serving images
app.use('/images', express.static('./public/images'));

// GET
app.get('/', (request, response) => {
  response.json(data);
});

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

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
