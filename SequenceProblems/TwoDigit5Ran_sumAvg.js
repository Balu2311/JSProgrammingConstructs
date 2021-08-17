//UC4 add 5 Random 2 Digit values
let twoDigNum;
let count=0;
let sum=0;
while(count<5)
{
    twoDigNum = Math.floor(Math.random() * 99) + 10;
    console.log('Number = '+twoDigNum);
    //addinng random digits
    sum +=twoDigNum;
    count++;
}
console.log('Sum of 5 two digits number is = '+sum);
console.log('Average of the sum of the 5 two digits number is = '+ sum/count);

