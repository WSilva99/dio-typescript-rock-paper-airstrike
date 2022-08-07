const score = document.querySelector('#score') as HTMLDivElement;
const result = document.querySelector('#result') as HTMLDivElement;
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerSelection = Math.random();
  if (computerSelection < .34)
    return 'PEDRA';
  
  if (computerSelection <= .67)
    return 'PAPEL';
  
  return 'ATAQUE AÉREO';
}

function getResult(playerSelection: string, computerSelection: string) {
  if(playerSelection.toUpperCase() === "ATAQUE AÉREO" && computerSelection.toUpperCase() === "ATAQUE AÉREO") {
    playerScore--;
    computerScore--;
    return "Aniquilacao mutua";
  }
  
  if (playerSelection.toUpperCase() === "PAPEL" && computerSelection.toUpperCase() === "PAPEL"){
    playerScore++;
    computerScore++;
    return "Ambos venceram";
  }
  
  if(playerSelection.toUpperCase() === "PEDRA" && computerSelection.toUpperCase() === "PEDRA")
    return "Sem ganhador";
  
  if(playerSelection.toUpperCase() === "ATAQUE AÉREO" || playerSelection.toUpperCase() === "PEDRA" && computerSelection.toUpperCase() === "PAPEL") {
    playerScore++;
    return "Você venceu";
  }
  
  computerScore++;
  return "O computador venceu";
}

function showResult(res: string) {
  result.innerText = res;
  score.innerText = `Jogador [ ${playerScore} ] : [ ${computerScore} ] Computador`;
}

function play(choice: string) {
  const computerChoice = getComputerChoice();
  console.log(`Jogador: ${choice} - Computador: ${computerChoice}`);
  const result = getResult(choice, computerChoice);
  showResult(result);
}

buttons.forEach(button => {
  button.addEventListener('click', (event: Event) => {
    play((event.target as HTMLButtonElement).innerText);
  });
});

