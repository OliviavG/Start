// Note all functions in first section
let score=0
let gameInProgress = false 



//function to start a new Game 
function startGame () {
	const game = document.getElementById ('game')
	const welcome = document.getElementById ('start')

	gameInProgress = true 
	game.className = ''
	welcome.className = 'hidden'
	score = 0 
}

//function for Play Button
function init (){
	const playbutton = document.getElementById('play')

	playbutton = addEventListener('click', startGame )
}

//deal random number of card
function getRandomIntInclusive(min, max) {
		min= Math.ceil (min)
		max=Math.floor(max)
		return Math.floor (Math.random () *(max - min + 1))+ min
}

document.addEventListener('DOMContentloaded', init)

