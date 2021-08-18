function checkMonth()
{
    //get input from console using prompt
    var day = parseInt( prompt('Enter the day?'));
    var month = parseInt(prompt('Enter the month in number?'));
        switch(month)
        {
            case 3:
                if(day>=20 && day<=31)
                {
                    return true;
                }
                return false;
            case 4:
                if(day>=1 && day<=30)
                {
                    return true;
                }
                return false;
            case 5:
                if(day>=1 && day<=31)
                {
                    return true;
                }
                return false;
            case 6:
                if(day>=1 && day<=20)
                {
                    return true;
                }
                return false;
            default:
                return false;
        }
}
console.log(checkMonth()?"Valid":"Invalid");
