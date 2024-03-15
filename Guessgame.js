// Computer Number Pick
const ComputerPick = Math.floor (Math.random ()*21);
const guessfield = document.getElementById( 'guessfield');
const result = document.getElementById('result')

let attempt = 0;

function guessgame(){
    const userguess = parseInt(guessfield.value);

    attempt++
    if (userguess === ComputerPick){
        result.textContent = `Congratulations, you have won with an attempt of ${attempt}`
        result.style.color="Green"
    }

else if( userguess < ComputerPick){
    result.textContent= 'Too Low, Try Again!'
    result.style.color="red"
}
else if((userguess > 20) || (userguess < 1)){
    result.textContent= 'Invalid input, You must not exceed 20'
    result.style.color="red"
}
else if( userguess > ComputerPick){
    result.textContent= 'Too Low , Try Again!'
    result.style.color="red"
}




    else{
        result.textContent = ` Guess not Correct, try again.`
    }
    
}