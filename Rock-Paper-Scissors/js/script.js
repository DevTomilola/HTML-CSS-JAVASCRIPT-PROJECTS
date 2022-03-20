const handOptions = {
    "rock": "assets/Rock.png",
    "paper": "assets/Paper.png",
    "scissors": "assets/Scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // show the next page with the hand page

    let contest = document.querySelector(".contest");
    contest.style.display = 'flex';

    //set the user pick
    document.getElementById("userPickImage").src = handOptions[hand]

    pickComputerHand(hand);
}

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * 3)];

  //set the user pick
  document.getElementById("computerPickImage").src = handOptions[cpHand];

  referee(hand, cpHand);
}

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOST😭");
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WON🥳");
      setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie⚔️");
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WON🥳");
      setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOST😭");
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie⚔️");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie⚔️");
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOST😭");
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WON🥳");
      setScore(SCORE + 1);
    }

}

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
    // show the next page with the hand page

    let hands = document.querySelector('.hands');
    hands.style.display = 'flex';
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}

