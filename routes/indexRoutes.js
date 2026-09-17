import express, { Router } from 'express';
import data from '../data/MOCK_DATA.json' with { type: 'json' };

const router = Router();

// GET
router.get('/', (request, response) => {
  response.json(data);
});

// GET - dowload method
router.get('/download', (request, response) => {
  response.download('./public/images/mountains.jpeg');
});

// GET
router.get('/redirect', (request, response) => {
  response.redirect('https://my-portfolio-silk-eta-21.vercel.app/');
});

// GET with next
router.get(
  '/next',
  (request, response, next) => {
    console.log('The respose will be sent by the next function');
    next();
  },
  (request, response) => {
    response.send('Rout with a second callback');
  },
);

export default router;
