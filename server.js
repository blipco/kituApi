const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = (process.env.PORT||3000);
const url = 'https://www.randomuser.me/api/?nat=us';

app.use(bodyParser.json());

let storage = [];

app.get('/users', async function(req, res) {
  for(let i=0;i<10;i++){
    await axios.get(`${url}`)
    .then((axiosRes) => {
      storage = storage.concat(axiosRes.data.results);
    })
    .catch((err) => {res.status(400).send(err)});
  };
  res.status(200).send(storage);
});

app.get('/users/firstname/:firstname',(req, res, err) => {
  const firstName = req.params.firstname;
  for(let i=0;i<=storage.length;i++) {
    if (storage[i].name.first == firstName) {
      res.status(200).send(storage[i]);
    }else {
      console.error({'message': 'User not found! '});
    };
  };
});

app.post('/users',(req, res) => {
  if(req.body!== undefined) {
    storage.push(req.body);
    res.status(201).json({'message':'User successfully created!'});
  } else {
    res.status(404).json({'message':'User not created!'});
  };
});

app.listen(port,() => console.log(`kituApi is listening on port ${port}`));