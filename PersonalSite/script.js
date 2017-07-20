// Test- it seems as if my script.js file is not linked to my index.html 
const test = 'Hello'

//* code for recipe search -  no idea yet how to do this as you need to be able to select a grid i guess 
let search= document.getElementById('Search');
// Code for Subscription tag - I would like to check if an email address is right or not 
const subscribe = 'something with @'

function testInput(){
  const SubTry = document.getElementById('my_input').value;
  const responseDiv = document.getElementById('response');

  if (SubTry=== subscribe) {
    // good! This is an correct email address 
    responseDiv.innerHTML = 'Thanks! An email will be sent soon'
  } else if(SubTry === 'no @'){
    //maybe they misspelled
    responseDiv.innerHTML = 'Hey, you almost got it, but you forgot a @'
  } 
}

function secondFunction (inputValue){
  console.log (inputValue)
  alert (inputValue)
}


const Cup = 240 

function multiply()	{
	const M = document.getElementById('multiplier').value
	const answerBox = document.getElementById('answer')
	answerBox.innerHTML = M * Cup 
} 
