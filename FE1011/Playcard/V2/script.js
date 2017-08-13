let score = 0 
let gameInProgess = false 

function hit (){
	console.log ('you have choosen to hit')
}

function stay (){
	console.log ('you have choosen to stay')
}
// function to start the Game 
function newGame () {
	
	const game = document.getElementById ('game')
	const Play = document.getElementById ('Play')
	console.log ('New game has started ')

	gameInProgess = true 
	game.className = ''
	Play.className = 'hidden'
	score = 0

	const hitButton = document.getElementById ('hit')
	const stayButton = document.getElementById ('stay')

	hitButton.addEventListener ('click', HIT)
	stayButton.addEventListener ('click', STAY)

// function to start the play button
function init () {
	console.log ('DOMContentLoaded')
	const playButton = document.getElementById ('playcard')

	playButton.addEventListener ('click', newGame)
}
// function to hit with random numbers 
function getRandomIntInclusive (min, max) {
	min = Math.ceil (min)
	max = Math.ceil (max)
	return Math.floor (Math.random() * (max - min + 1 )) + min 
}

document.addEventListener ('DOMContentLoaded', init)