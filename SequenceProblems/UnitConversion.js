console.log("Unit Conversion");

let incs = 42;
let ft = incs / 12;
let leftover = incs % 12;
console.log(ft + " feet and " + leftover + " inches");


//convert feet to meter
let len = 60;  //divide lenght by 3.281 to convert feet to meter
let breadth = 40

//formula for rectangle area
let area = (len*breadth);
let areas = area *0.3048;
console.log('area = '+ areas +'\tMeters');

//calculate for 25 plots
let totalArea = area*25;
console.log('Total Area of 25 plots = '+totalArea +'\tMeters' );

//formula for converting squaremeter to area
let areaInAcre = (totalArea*2.2957).toFixed(2);
console.log('Area of 25 plots are ='+ areaInAcre +'\tacres');