function computerPlay() {
	let computerChoice = [ 'rock', 'paper', 'scissors' ];
	let random = Math.floor(Math.random() * 3);
	let compSelect = computerChoice[random];
	return compSelect;
}

let playerScore = 0;
let computerScore = 0;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playAgainButton = document.getElementById('playAgain');
const playerScoreDisplay = document.querySelector('#listRight');
const computerScoreDisplay = document.querySelector('#listLeft');
const resultsLi = document.createElement('li');
const resultsDisplay = document.querySelector('#resultDisplay');

function play(playerChoice) {
	const computerSelection = computerPlay();
	return playRound(playerChoice, computerSelection);
}

function game() {
	rockButton.addEventListener('click', function() {
		play('rock');
	});

	paperButton.addEventListener('click', function() {
		play('paper');
	});

	scissorsButton.addEventListener('click', function() {
		play('scissors');
	});
}

game();

function playRound(playerChoice, computerSelection) {
	if (
		(playerChoice === 'rock' && computerSelection === 'scissors') ||
		(playerChoice === 'paper' && computerSelection === 'rock') ||
		(playerChoice === 'scissors' && computerSelection === 'paper')
	) {
		playerWin(playerChoice, computerSelection);
	} else if (playerChoice === computerSelection) {
		gameDraw(playerChoice, computerSelection);
	} else {
		computerWin(playerChoice, computerSelection);
	}
}

playRound();

function playerWin(playerChoice, computerSelection) {
	resultsDisplay.innerHTML = `You Win! ${playerChoice} beats ${computerSelection}`;
	playerScore++;
	playerScoreDisplay.innerHTML = playerScore;
	winner(computerScore, playerScore);
}

function gameDraw(playerChoice, computerSelection) {
	if (playerChoice) {
		resultsDisplay.innerHTML = `It's a Tie.  You both chose ${playerChoice}`;
		winner(computerScore, playerScore);
	}
}

function computerWin(playerChoice, computerSelection) {
	resultsDisplay.innerHTML = `You Lose! ${computerSelection} beats ${playerChoice}`;
	computerScore++;
	computerScoreDisplay.innerText = computerScore;
	winner(computerScore, playerScore);
}

function winner(computerScore, playerScore) {
	if (playerScore === 10 && computerScore < playerScore) {
		resultsDisplay.innerHTML = '----You Won!!  You have defeated the computer!----';
		let endInstructions = (document.querySelector('.instructions').innerHTML = '');
		rockButton.className = 'hide';
		paperButton.className = 'hide';
		scissorsButton.className = 'hide';
		let playAgainButton = document.getElementById('playAgain');
		playAgainButton.classList.remove('hide');
		playAgainButton.classList.add('btn');
	} else if (computerScore === 10 && computerScore > playerScore) {
		resultsDisplay.innerHTML = '----You Lost!!  The computer beat you.----';
		let endInstructions = (document.querySelector('.instructions').innerHTML = '');
		rockButton.className = 'hide';
		paperButton.className = 'hide';
		scissorsButton.className = 'hide';
		let playAgainButton = document.getElementById('playAgain');
		playAgainButton.classList.remove('hide');
		playAgainButton.classList.add('btn');
	}
}

function playAgain() {
	playAgainButton.addEventListener('click', function() {
		startOver();
	});
}

playAgain();

function startOver() {
	resultsDisplay.innerHTML = '';
	playerScoreDisplay.innerHTML = '';
	computerScoreDisplay.innerHTML = '';
	computerScore = 0;
	playerScore = 0;
	rockButton.classList.remove('hide');
	rockButton.classList.add('btn');
	paperButton.classList.remove('hide');
	paperButton.classList.add('btn');
	scissorsButton.classList.remove('hide');
	scissorsButton.classList.add('btn');
	playAgainButton.className = 'hide';
	document.querySelector('.instructions').innerHTML = 'Choose one of the options above.  First one to 10 wins!';
}
