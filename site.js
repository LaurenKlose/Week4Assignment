
//add
function add(num1, num2){

  var addi = parseFloat(num1) + parseFloat(num2),
      addiString = num1 + ' + ' + num2 + ' = ' + addi;

      onclick=function(){
        document.getElementById('result').innerHTML=addiString;
      }

}

// substract

function subtract(num1, num2){

  var subt = parseFloat(num1) - parseFloat(num2),
      subtString = num1 + ' - ' + num2 + ' = ' + subt;

      onclick=function(){
        document.getElementById('result').innerHTML=subtString;
      }
}

// multiply

function multiply(num1, num2){

  var multi = parseFloat(num1) * parseFloat(num2),
    multiString = num1 + ' * ' + num2 + ' = ' + mult;
      document.getElementById('result').innerHTML=multiString;

      onclick=function(){
        document.getElementById('result').innerHTML=multiString;
      }
}


// divide

function divide(num1, num2){

  var divid = parseFloat(num1) / parseFloat(num2),
    dividString = num1 + ' / ' + num2 + ' = ' + divid;

    onclick=function(){
        document.getElementById('result').innerHTML=dividString;
      }
}

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
  var input1 = document.getElementById('first').value;
  var input2 = document.getElementById('second').value;
  var output = operation(input1,input2);
    document.getElementById('result').innerText += output;


// this if else statement will return a statement if no
// value is entered

    if (input1 == "" || input2 == ""){

      document.getElementById('result').innerHTML="Oops, looks like you forgot to put numbers in!"
    } else {

    }
}

// buttons are assigned a function to do calculation

document.getElementById('add').onclick = function(){
    populatehtml(add) };
document.getElementById('subtract').onclick = function(){
    populatehtml(subtract) };
document.getElementById('multiply').onclick = function(){
    populatehtml(multiply) };
document.getElementById('divide').onclick = function(){
    populatehtml(divide) };