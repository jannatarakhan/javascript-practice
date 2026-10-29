
let totalHeart = 0;
let totalOxygen = 0;
let attempts = 0;

let hearts = [];
let oxygens = [];

function health()
{
    let heart = parseFloat(document.getElementById("heart").value);
    let oxygen = parseFloat(document.getElementById("oxygen").value);

    hearts.push(heart);
    oxygens.push(oxygen);

    totalHeart = totalHeart + heart;
    totalOxygen = totalOxygen + oxygen;
    attempts = attempts + 1;

    let avgHeart = totalHeart / attempts;
    let avgOxygen = totalOxygen / attempts;

    let risk = (100 - oxygen) * 2 + Math.abs(heart - 80) * 0.5;

    document.getElementById("avgHeart").innerHTML
    = `Average Heart Rate: ${avgHeart.toFixed(2)}`;

    document.getElementById("avgOxygen").innerHTML
    = `Average Oxygen Saturation: ${avgOxygen.toFixed(2)}`;

    document.getElementById("risk").innerHTML
    = `Risk Score: ${risk}`;

    if(risk <= 10)
    {
        document.getElementById("feedback").innerHTML
        = `SAFE`;
    }
    else if(risk > 10 && risk <= 20)
    {
        document.getElementById("feedback").innerHTML
        = `WARNING`;
    }
    else
    {
        document.getElementById("feedback").innerHTML
        = `DANGER`;
    }

    document.getElementById("heart").value = "";
    document.getElementById("oxygen").value = "";
}
