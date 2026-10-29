
let attempts = 0;

function checkStrength()
{
    let password = document.getElementById("password").value;
    let score = 0;

    attempts = attempts + 1;

    if(password.length >= 6)
    {
        score = score + Math.floor(password.length / 2) * 10;
    }
    if(/[A-Z]/.test(password))
    {
        score = score + 15;
    }
    if(/[a-z]/.test(password))
    {
        score = score + 15;
    }
    if(/[0-9]/.test(password))
    {
        score = score + 20;
    }
    if(/[!@#$%^&*]/.test(password))
    {
        score = score + 25;
    }

    document.getElementById("score").innerHTML
    = `Score: ${score}`;

    document.getElementById("attempts").innerHTML
    = `Attempts: ${attempts}`;

    if(score >= 100)
    {
        document.getElementById("strength").innerHTML
        = `Perfect Password!`;

        document.getElementById("feedback").innerHTML
        = `Success! Very Strong Password!`;
    }
    else if(score <= 30)
    {
        document.getElementById("strength").innerHTML
        = `Very Weak`;
    }
    else if(score <= 50)
    {
        document.getElementById("strength").innerHTML
        = `Weak`;
    }
    else if(score <= 70)
    {
        document.getElementById("strength").innerHTML
        = `Medium`;
    }
    else if(score <= 90)
    {
        document.getElementById("strength").innerHTML
        = `Strong`;
    }
    else
    {
        document.getElementById("strength").innerHTML
        = `Very Strong`;
    }
    if(score < 100)
    {
        document.getElementById("feedback").innerHTML = "";
    }
    if(attempts > 8 && score <= 70)
    {
        document.getElementById("feedback").innerHTML
        = `Need practice! Use uppercase, lowercase, numbers and special characters.`;
    }

    document.getElementById("password").value = "";
}
