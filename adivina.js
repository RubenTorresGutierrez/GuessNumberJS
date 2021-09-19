//Rubén Torres
'use strict'

main();

//Functions
function main(){

    //Variables
    let random = Math.floor((Math.random() * 100) + 1);
    let num;
    let attemps = 0;

    //console.log(random);

    do{
        num = prompt('Try to guess the random number between 1 and 100:');
        if(num < 1 || num > 100)
            alert('Number is not correct. Write a number between 1 and 100');
        else{
            if(num > random)
                alert('Your number is greater than the random number');
            else 
                if(num < random)
                    alert('Your number is lower than the random number')
            attemps++;
        }
    }while(random != num);

    alert('Alright, you got the number!!!');
    alert('You made ' + attemps + ' attemps.');

}