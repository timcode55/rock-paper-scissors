function computerPlay() {
	let computerChoice = [ 'rock', 'paper', 'scissors' ];
	let random = Math.floor(Math.random() * 3);
	let compSelect = computerChoice[random];
	return compSelect;
}

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		return 'Player wins!!';
	} else if (playerSelection === computerSelection) {
		return "It's a Tie";
	} else {
		return 'Computer wins!!';
	}
}

let computerScore = 0,
	playerScore = 0;
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);
