import express, { Router } from 'express';

const router = Router();

// POST express.json and exprress.urlencoded
router.post('/', (request, response) => {
  console.log(request.body);
  response.send(request.body);
});

export default router;
