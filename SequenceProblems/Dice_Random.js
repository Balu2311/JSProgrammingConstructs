//UC1  get 0 to 9 random numbers
let DiceRandom = Math.floor(Math.random()* 10);
console.log(DiceRandom);

//UC2    Get 1 to 6  random numbers
let DiceRoll = Math.floor(Math.random()* 6) + 1;
console.log(DiceRoll);

//UC3 add two randomdice  values
let count =0,sum=0;
while(count<2)
{
    diceRoll = (Math.floor(Math.random() * 6))+1;
    console.log('Number = '+diceRoll);
    //appending all dicerolls to sum
    sum +=diceRoll;
    count++;
}
console.log('Sum of two dicerolls is :'+sum );