
let secret = Math.floor(Math.random() * 4501) + 500;
let attempts = 0;
let finished = false;

function checkGuess()
{
    if(finished == true)
    {
        return;
    }

    let guess = parseInt(document.getElementById("guess").value);

    if(isNaN(guess))
    {
        document.getElementById("feedback").innerHTML
        = `Enter a valid number!`;
        return;
    }

    attempts = attempts + 1;

    document.getElementById("attempts").innerHTML
    = `Attempts: ${attempts}`;

    if(guess == secret)
    {
        document.getElementById("feedback").innerHTML
        = `Correct!`;

        document.getElementById("result").innerHTML
        = `You Won!`;

        finished = true;
    }
    else if(guess > secret)
    {
        document.getElementById("feedback").innerHTML
        = `Too High!`;
    }
    else
    {
        document.getElementById("feedback").innerHTML
        = `Too Low!`;
    }

    if(attempts >= 5 && guess != secret)
    {
        document.getElementById("result").innerHTML
        = `Out of guesses!`;

        finished = true;
    }

    if(finished == true)
    {
        document.getElementById("guess").disabled = true;
    }

    document.getElementById("guess").value = "";
}
