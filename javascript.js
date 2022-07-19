function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

function playRound (userInput, computerInput)
{
    let verdict = " ";

    if (checkDraw(userInput, computerInput))
    {
        verdict = `${userInput} & ${computerInput} = a Draw! Play another round!!`;
    }
    /*
        if userInput == rock
            if computerInput == rock, draw//Done
            else if computerInput == scissors, user wins
            else if computerInput == paper, user loses

        if userInput == paper
            if computerInput == paper, draw//Done
            else if computerInput == rock, user wins
            else if computerInput == scissors, user loses

        if userInput == scissors
            if computerInput == scissors, draw//Done
            else if computerInput == paper, user wins
            else if computerInput == rock, user loses

    */
}

function checkDraw(userInput, computerInput)
{
    return (userInput.toLowercase() == computerInput.toLowercase());
}