const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

let answers = [];

//1. { numOne: x, numTwo: x }
function doMaths(inputs) {
    if (inputs.operator === '+'){
      inputs.result = Number(inputs.num1) + Number(inputs.num2);
    } else if (inputs.operator === '-'){
      inputs.result = Number(inputs.num1) - Number(inputs.num2);          
    } else if (inputs.operator === '*'){
      inputs.result = Number(inputs.num1) * Number(inputs.num2); 
    } else if (inputs.operator === '/') {
      inputs.result = Number(inputs.num1) / Number(inputs.num2);
    }

answers.push(inputs);
}

console.log('Answers are:', answers)



app.get('/maths', function(req, res){
  console.log('return from app.get/maths is:', answers);
  res.send(answers);
})

app.post('/maths', function(req, res){
  console.log( 'User says do maths!!');
  console.log('req.body is', req.body);
  doMaths(req.body);
  res.sendStatus(201);
})

app.get('/answers', function(req, res){
  console.log(' answers results logs are:', answers);
  res.send(answers);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

