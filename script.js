let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const result = document.querySelector('#container');
const text = document.querySelector('#winner-choices');
const info = document.querySelector('.details');
const uScore = document.querySelector('#user');
const cScore = document.querySelector('#comp');

const compChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = (userChoice, computerChoice) => {
    result.innerText = "Game Draw!!"
    result.style.backgroundColor = "#735DA5";
    info.classList.remove("hide");
    text.innerText = `Computer choice: ${computerChoice}`;
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        result.innerText = `You win!! ${userChoice} beats ${computerChoice}`;
        result.style.backgroundColor = "green";
        info.classList.remove("hide");
        text.innerText = `Computer choice: ${computerChoice}`;
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        result.innerText = `You lose. ${computerChoice} beats ${userChoice}`;
        result.style.backgroundColor = "red";
        info.classList.remove("hide");
        text.innerText = `Computer choice: ${computerChoice}`;
    }
}

const playGame = (userChoice) => {
    const computerChoice = compChoice();
    if(userChoice === computerChoice){
        drawGame(userChoice, computerChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissor" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})