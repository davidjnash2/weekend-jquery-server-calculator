$('document').ready(onReady); // jQuery command to run onReady function once page loads

function onReady(){ // function to run after page loads to set ready state functionality
    console.log('jQuery in the hizzy!');


    $('#answer-button').on('click', sendMaths()); // event listener for this button
    $('#clear-inputs-button').on('click', clearFields()); // event listener for this button
    // $('#sum').on('click', doAdd()); // event listener for this button
    // $('#subtract').on('click', doSubtract()); // event listener for this button
    // $('#multiply').on('click', doMultiply()); // event listener for this button
    // $('#division').on('click', doDivide()); // event listener for this button



    // $('#zero').on('click', ); // event listener for this button
    // $('#one').on('click', ); // event listener for this button
    // $('#two').on('click', ); // event listener for this button
    // $('#three').on('click', ); // event listener for this button
    // $('#four').on('click', ); // event listener for this button
    // $('#five').on('click', ); // event listener for this button
    // $('#six').on('click', ); // event listener for this button
    // $('#seven').on('click', ); // event listener for this button
    // $('#eight').on('click', ); // event listener for this button
    // $('#nine').on('click', ); // event listener for this button
    // $('#plus').on('click', ); // event listener for this button
    // $('#minus').on('click', ); // event listener for this button
    // $('#multiply').on('click', ); // event listener for this button
    // $('#divide').on('click', ); // event listener for this button
    // $('#equals').on('click', ); // event listener for this button
    // $('#all-clear').on('click', ); // event listener for this button

    getAnswers(); // run function here to grab all answer data as page loads

}


function sendMaths(event){ // event handler for answer button
    // event.preventDefault(); // prevent default brower response
    let numOne = $('#first-number').val();
    let numTwo = $('#second-number').val();
    //let operator = //????????? $(this).val();
    console.log('The equation is:', numOne, '', 'operator', '', numTwo);

    $.ajax({
        method: 'POST',
        url: '/maths',
        data: {
          numOne,
          numTwo,
          operator
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
      console.log('The winning number is:', response);
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
          <li>${answer.numOne} ${anwer.operator} ${answer.numTwo} = ${answer.result}</li>
      `)
    }
  }

// function doAdd(event) {
//     // event.preventDefault();
//     console.log('Add button clicked!');
// } // end doAdd function

// function doSubtract(event) {
//     // event.preventDefault();
//     console.log('Subtract button clicked!');
// } // end doSubtract function

// function doMultiply(event) {
//     // event.preventDefault();
//     console.log('Multiply button clicked!');
// } // end doMultiply function

// function doDivide(event) {
//     // event.preventDefault();
//     console.log('Divide button clicked!');
// } // end doDivide function

function clearFields(event){ // event handler function for C button
    //event.preventDefault(); // prevent any default browswer response
    $('#first-number').val(''); // clear fields
    $('#second-number').val(''); // clear fields
} // end clearFields function




// to use later for stretch goal to delete selected line
// function goAway() { // event handler for go away button
//     console.log('go away button works!') // log to test
//     $(this).parent().remove(); // remove each associated div section on click
// } // end goAway function

// let index = +$(this).closest('tr').children('#lineCounter').text();
    // console.log(index);
    // $(this).closest('tr').remove(); // assign removal to occur on clicked line
    // employeesArray.splice(index, 1);
    // console.log(employeesArray);