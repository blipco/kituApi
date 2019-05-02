const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = (process.env.PORT||3000);
const url = 'https://www.randomuser.me/api/?format=json&results=1&nat=us';

app.use(bodyParser.json());

let storage = [];

app.get('/users',(req, res) => {
  axios.get(`${url}`)
  .then((axiosRes) => {
    storage = [...axiosRes.data.results];
    res.status(200).json(storage);
  })
  .catch(err => res.status(400).send(err));
});

app.get('/users/firstname/:firstname',(req, res) => {
  let firstName = req.params.firstname;
  for(let i=0;i<storage.length;i++) {
    if(storage[i].name.first==firstName) {
      res.status(200).send(storage[i]);
    }else {
      res.status(404).json({'message': 'User not found!'});
    };
  };
});

app.post('/users',(req, res) => {
  storage.push(req.body);
  res.status(201).send({'message':'User successfully created!'})
});

app.listen(port,() => console.log(`kituApi is listening on port ${port}`));
