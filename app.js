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
		// return `You Win! ${playerSelection} beats ${computerSelection}`;
	} else if (playerChoice === computerSelection) {
		gameDraw(playerChoice, computerSelection);
		// return "It's a Tie";
	} else {
		computerWin(playerChoice, computerSelection);
		// return `You Lose! ${computerSelection} beats ${playerSelection}`;
	}
}

playRound();

function playerWin(playerChoice, computerSelection) {
	resultsDisplay.innerHTML = `You Win! ${playerChoice} beats ${computerSelection}`;
	playerScore++;
	// playerScoreDisplay.innerHTML = `You Win! ${playerChoice} beats ${computerSelection}`;
	playerScoreDisplay.innerHTML = playerScore;
	winner(computerScore, playerScore);
}

function gameDraw(playerChoice, computerSelection) {
	resultsDisplay.innerHTML = "It's a Tie";
	winner(computerScore, playerScore);
}

function computerWin(playerChoice, computerSelection) {
	resultsDisplay.innerHTML = `You Lose! ${computerSelection} beats ${playerChoice}`;
	computerScoreDisplay.innerHTML = `You Lose! ${computerSelection} beats ${playerChoice}`;
	computerScore++;
	computerScoreDisplay.innerText = computerScore;
	winner(computerScore, playerScore);
}

function winner(computerScore, playerScore) {
	if ((computerScore === 3 && computerScore > playerScore) || (playerScore === 3 && playerScore > computerScore)) {
		resultsDisplay.innerHTML = '----You Lost!!  The computer has defeated you.----';
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
}
