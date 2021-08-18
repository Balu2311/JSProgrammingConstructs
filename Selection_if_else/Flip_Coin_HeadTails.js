function getCoinFlip()
{
    return Math.floor((Math.random() * 10))%2;
    //returns either 0 or 1
}
//0 is head , 1 is tail
console.log(getCoinFlip()==0?"Head":"Tail");