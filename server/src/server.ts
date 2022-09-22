import express from 'express';

const app = express()

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

app.get('/ads', (request, response) => {
  return response.json([
    {id: 1, name: 'um'},
    {id: 1, name: 'dois'},
    {id: 1, name: 'um'},
    {id: 1, name: 'um'},
  ])
})

app.listen(3333)