
const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};
const game = {
  playerHand: "",
  aiHand: "",
};
const hands = [...document.querySelectorAll(".select img")];


function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
  });
  this.style.boxShadow = "0px 0px 10px 10px  red";
}


function computerChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
}
function checkResult(player, ai) {
  if (player === ai) {
    return "draw";
    // gameSummary.draws++;
  } else if (player === "papier" && ai === "kamień") {
    return "win";
  } else if (player === "kamień" && ai === "nożyczki") {
    return "win";
  } else if (player === "nożyczki" && ai === "papier") {
    return "win";
  } else if (player === "papier" && ai === "nożyczki") {
    return "loss";
  } else if (player === "nożyczki" && ai === "kamień") {
    return "loss";
  } else if (player === "kamień" && ai === "papier") {
    return "loss";
  }
}
function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  gameSummary.numbers++;
  document.querySelector("p.numbers span").textContent = gameSummary.numbers;

  if (result === "win") {
    gameSummary.wins++;
    document.querySelector("p.wins span").textContent = gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś";
  } else if (result === "loss") {
    gameSummary.losses++;
    document.querySelector("p.losses span").textContent = gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Przegrałeś";
  } else if (result === "draw") {
    gameSummary.draws++;
    document.querySelector("p.draws span").textContent = gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Remis";
  }
}

function endGame() {
  document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow =
    "";
  game.playerHand = "";
}

function startGame() {
  if (!game.playerHand) {
    return alert("wybierz dłoń");
  }
  game.aiHand = computerChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);
