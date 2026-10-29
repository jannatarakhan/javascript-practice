let totalcalories=0;
let attempts=0;
let goal=2000

function calories()
{
    let calories= parseFloat(document.getElementById("calories").value);

    totalcalories=totalcalories+calories;
    attempts=attempts+1;

    document.getElementById("totalcalories").innerHTML
    =`Total calories: ${totalcalories}`;
    let progress = (totalcalories / goal) * 100;
    document.getElementById("progress").innerHTML
    =`progress: ${progress}`;
    /*document.getElementById("progress").innerHTML
    = `Daily Goal: ${totalCalories} / 2000`;*/

    if(totalcalories<=800)
    {
        document.getElementById("feedback").innerHTML
        =`You're off to healthy start!`;
    }
    else if(totalcalories>800 && totalcalories<=1600)
    {
        document.getElementById("feedback").innerHTML
        =`Good Progress ,keep it balance!`;
    }
    else if(totalcalories>1600 && totalcalories<2000)
    {
        document.getElementById("feedback").innerHTML
        =`Almost limit!`;
    }
    else{
        document.getElementById("feedback").innerHTML
        =`Goal Reached!Stay mindful`;
    }
    if(attempts>10 && totalcalories<2000)
    {
        document.getElementById("feedback").innerHTML
        =`Be cautious of frequent snacking!`;
    }   
    document.getElementById("calories").value="";  
}