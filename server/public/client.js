$('document').ready(onReady); // jQuery command to run onReady function once page loads

function onReady(){ // function to run after page loads to set ready state functionality
    console.log('jQuery in the hizzy!');

    $('#submit').on('click', sendMaths()); // event listener for this button
    //$('#clear').on('click', clearFields()); // event listener for this button
    $('.operator-button').on('click', getOperator());
    getAnswers(); // run function here to grab all answer data as page loads

}


// let operator;

// function getOperator(){
//     if ((${'.operator-button'}) === '+'){
//         operator = '+';
//     } else if ((${'#-'}) === '-'){
//         operator = '-';
//     } else if(value === '*'){
//         operator = '*';
//     } else if(value === '/'){
//         operator = '/';
//     }
// }



function sendMaths(event){ // event handler for answer button
    //event.preventDefault();
    
    let numOne = $('#first-number').val();
    let numTwo = $('#second-number').val();
    console.log('The equation is:', numOne, 'operator,', numTwo);
 
    $.ajax({
        method: 'POST',
        url: '/maths',
        data: {
          numOne: numOne,
          numTwo: numTwo,
        //   operator: operator,
        }
      }).then(function(response) { // check if response posts
        console.log( 'Posted' );
        getAnswers();
      }).catch(function(error){
        alert('Error with guess POST!');
        console.log( 'Error with post:', error);
      })
    
    
} // end getAnswer function

function getAnswers() {
    $.ajax({
      method: 'GET',
      url: '/answers'
    }).then(function (response){
      console.log('And the answer is:', response);
      renderToDom(response);
    }).catch(function(error){
      alert('request failed');
      console.log('request failed', error);
    });
  }

  function renderToDom(answers){
    $('#interaction-log').empty();
    console.log('The answers are in:', answers);
    for (let answer of answers){
      $('#interaction-log').append(`
          <li>${answer.numOne} ${answer.operator} ${answer.numTwo} = ${answer.result}</li>
      `);
    }
  }


// function clearFields(){ // event handler function for C button
//     //event.preventDefault(); // prevent any default browswer response
//     $('#first-number').val(''); // clear fields
//     $('#second-number').val(''); // clear fields
// } // end clearFields function