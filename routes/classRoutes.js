import express, { Router } from 'express';
import data from '../data/MOCK_DATA.json' with { type: 'json' };

const router = Router();

// Route chaining
router
  .route('/')
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

// GET with routing params
router.get('/:id', (request, response) => {
  const studentId = Number(request.params.id);

  const student = data.filter((student) => student.id === studentId);

  response.send(student);
});

export default router;
