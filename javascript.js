let userScore = 0;
let compScore = 0;

function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

function playRound (userInput, computerInput)
{
    let dVerdict = `Draw! ${userInput} = ${computerInput}! Play another round!!`;
    let lVerdict = `Losses happen, ${computerInput} beats ${userInput}! Let's go again!!`;
    let wVerdict = `Winner, winner, chicken dinner!!! ${userInput} beats ${computerInput}! Let's play another round!!`;
    let uInLower = userInput.toLowerCase();

    if (checkDraw(uInLower, computerInput))
    {
        return updateScore(dVerdict);
    }

    if (uInLower == "rock")
        if (computerInput == "scissors")
        {
            userScore++;
            return isGameOver(wVerdict);
        }

        else if (computerInput == "paper")
        {
            compScore++;
            return isGameOver(lVerdict);
        }

    if (uInLower == "paper")
        if (computerInput == "rock")
        {
            userScore++;
            return isGameOver(wVerdict);
        }

        else if (computerInput == "scissors")
        {
            compScore++;
            return isGameOver(lVerdict);
        }

    if (uInLower == "scissors")
        if (computerInput == "paper")
        {
            userScore++;
            return isGameOver(wVerdict);
        }

        else if (computerInput == "rock")
        {
            compScore++;
            return isGameOver(lVerdict);
        }
}

function checkDraw(userInput, computerInput)
{
    return (userInput.toLowerCase() == computerInput.toLowerCase());
}

function createScoreDiv()
{
    const scoreDiv = document.createElement('div');
    scoreDiv.setAttribute('id', 'score');
    document.body.appendChild(scoreDiv);

    const player = document.createElement('h5');
    player.setAttribute('id', 'ps');
    player.textContent = "Player Score: " + userScore;
    scoreDiv.appendChild(player);

    const comp = document.createElement('h5');
    comp.setAttribute('id', 'cs');
    comp.textContent = "Computer Score: " + compScore;
    scoreDiv.appendChild(comp);

    const verdict = document.createElement('h5');
    verdict.setAttribute('id', 'verdict');
    scoreDiv.appendChild(verdict);
}

function updateScore(verdict)
{
    const ps_t = document.getElementById("ps");
    const cs_t = document.getElementById("cs");
    const res = document.getElementById('verdict');

    if (compScore == 5 || userScore == 5)
    {
        res.style.color = 'red';
    }
    
    ps_t.innerHTML = "Player Score: " + userScore;
    cs_t.innerHTML = "Computer Score: " + compScore;
    res.innerHTML = verdict;
}

function isGameOver(verdict)
{
    if (compScore == 5 || userScore == 5)
    {
        buttons.forEach((button) => {
    
            button.removeEventListener('click', function () { playGame(button.id); });
            
            });


        if (compScore == 5)
        {
            updateScore(verdict = "You LOST. Better luck next time, cap'n!! The computer wins this one");
        }

        if (userScore == 5)
        {
            updateScore(verdict = "You WON. Hot stuff!! You showed that computer what's WHAT");
        }
    }
    else
    {
        updateScore(verdict);
    }

    return ((compScore == 5) || (userScore) == 5);
}

function playGame(userChoice)
{
    let userI = userChoice;
    let verdict = "";

    if (isGameOver())
    {
        return;
    }

    verdict = playRound(userI, getComputerChoice());
}

createScoreDiv();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
button.addEventListener('click', function () { playGame(button.id); });
    
});    
