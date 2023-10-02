var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");

var result=Math.floor(Math.random()*10) - 1;
console.log(result);

var no_of_guess=0;
var guesses_num=[];

function play()
{
    var user_guess=document.querySelector("#guess").value;
    if(user_guess < 1 || user_guess > 10)
    {
        alert("Enter the number between 1 to 10");
    }
    else
    {
        guesses_num.push(user_guess);
        no_of_guess=no_of_guess++;

        if(user_guess > result)
        {
            msg1.textContent="Your guess is low";
            msg2.textContent="Number of Guesses:"+no_of_guess;
            msg3.textContent="Guessed Numbers are:"+guesses_num;
        }

        else if(user_guess < result)
        {
            msg1.textContent="Your guess is High";
            msg2.textContent="Number of Guesses:"+no_of_guess;
            msg3.textContent="Guessed Numbers are:"+guesses_num;
        }

        else if(user_guess == result)
        {
            msg1.textContent="Your are the Winner";
            msg2.textContent="The Number is:"+result;
            msg3.textContent="The Guessed:"+no_of_guess+"Guesses"
        }
    }
}