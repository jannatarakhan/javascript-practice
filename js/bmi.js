
function calculate()
{
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let metre = height / 100;
    let kg = weight / 2.2046;

    let bmi = kg / (metre * metre);

    document.getElementById("result").innerHTML
    = `Calculation Result: ${bmi.toFixed(2)}`;

    if(bmi > 0 && bmi < 20)
    {
        document.getElementById("feedback").innerHTML
        = `Bad`;
    }
    else if(bmi >= 20 && bmi <= 30)
    {
        document.getElementById("feedback").innerHTML
        = `Not Bad`;
    }
    else if(bmi > 30)
    {
        document.getElementById("feedback").innerHTML
        = `Good`;
    }
    else
    {
        document.getElementById("feedback").innerHTML
        = `Invalid Input`;
    }

    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
}
