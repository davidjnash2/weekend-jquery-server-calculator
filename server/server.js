const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

let results = [];

//1. { numOne: x, numTwo: x }
// function mathAboutIt(inputs) {
//  let result = 0;
//     if (inputs.operator === '+'){
//       result = Number(inputs.num1) + Number(inputs.num2);
//     } else if (inputs.operator === '-'){
//       result = Number(inputs.num1) - Number(inputs.num2);          
//     } else if (inputs.operator === 'x'){
//       result = Number(inputs.num1) * Number(inputs.num2); 
//     } else if (inputs.operator === is it '%' or '/') {
//       result = Number(inputs.num1) / Number(inputs.num2);
// }

// results.push(inputs);
// }





app.get('/maths', function(req, res){
  console.log('...and the answer is:', results);
  res.send(results);
})

app.post('/maths', function(req, res){
  console.log( 'Here is some maths!!');
  console.log('req.body is', req.body);
  mathAboutIt(req.body);
  res.sendStatus(201);
})

app.get('/results', function(req, res){
  console.log('results logs are:', results);
  res.send(results);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

