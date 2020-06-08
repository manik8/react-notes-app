const server = require('express');
const data = require('./feed/sample.json');

const app = server();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  res.send(data);
});

app.get('/query', function(req, res){
  const { filter } = req.query;  
  console.log(req);
  const ret = data.entries.filter(e => e.programType === filter)
  console.log(`/query?filter=${filter}`);
  console.log(ret);
  res.send(ret);
});

app.listen(4000);