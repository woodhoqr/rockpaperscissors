function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

function playRound (userInput, computerInput)
{
    let verdict = " ";
    let uInLower = userInput.toLowerCase();

    if (checkDraw(uInLower, computerInput))
    {
        return verdict = `Draw! ${userInput} = ${computerInput}! Play another round!!`;
    }

    if (uInLower == "rock")
        if (computerInput == "scissors")
        {
            return verdict = `Winner, winner, chicken dinner!!! ${userInput} beats ${computerInput}! Let's play another round!!`;
        }

        else if (computerInput == "paper")
        {
            return verdict = `Losses happen, ${computerInput} beats ${userInput}! Let's go again!!`;
        }

    if (uInLower == "paper")
        if (computerInput == "rock")
        {
            return verdict = `Winner, winner, chicken dinner!!! ${userInput} beats ${computerInput}! Let's play another round!!`;
        }

        else if (computerInput == "scissors")
        {
            return verdict = `Losses happen, ${computerInput} beats ${userInput}! Let's go again!!`;
        }

    if (uInLower == "scissors")
        if (computerInput == "paper")
        {
            return verdict = `Winner, winner, chicken dinner!!! ${userInput} beats ${computerInput}! Let's play another round!!`;
        }

        else if (computerInput == "rock")
        {
            return verdict = `Losses happen, ${computerInput} beats ${userInput}! Let's go again!!`;
        }
}

function checkDraw(userInput, computerInput)
{
    return (userInput.toLowerCase() == computerInput.toLowerCase());
}

function checkWinner(verdict)
{
    return (verdict.charAt(0) == "W");
}

function playGame()
{
    let userI = "";
    let verdict = "";
    let userScore = 0;
    let compScore = 0;

 
    for (let i = 0; i < 5; i++)
    {
        userI = prompt("Choose your fighter: ");
        verdict = playRound(userI, getComputerChoice());
        if (verdict.charAt(0) == "D")
        {
            console.log(verdict);
        }
        else
        {
            if (checkWinner(verdict))
            {
                userScore++;
            }
            else
            {
                compScore++;
            }

           console.log(verdict);
        }
    }

    if (userScore == compScore)
    {
        console.log("What a CAT...or is that tik tok toe?");
    }

    else if (userScore > compScore)
    {
        console.log("Hot stuff!! You showed that computer what's WHAT");
    }

    else 
    {
        console.log("Better luck next time, cap'n!! The computer wins this one");
    }

    console.log("Final Score");
    console.log("User: " + userScore);
    console.log("Computer: " + compScore);

}

playGame();


