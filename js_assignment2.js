// prompt user for a number and assign to variable 
var serviceYear = parseInt(prompt("Please enter the number of service year:", ""));

//test for casual staff
if(serviceYear<=10){
    console.log("You are a level 1 staff, and your Designation is casual staff");
}

//test for Junior staff
else if(serviceYear>10 & serviceYear<=20){
    console.log("You are a level 2 staff, and your Designation is Junior staff");
}
//test for Senior staff
else if(serviceYear>20 & serviceYear<=30){
    console.log("You are a level 3 staff, and your Designation is Senior staff");
}

//test for Manager
else if(serviceYear>30 & serviceYear<=40){
    console.log("You are a level 4 staff, and your Designation is Manager");
}

//test for Director
else if(serviceYear>40 & serviceYear<=50){
    console.log("You are a level 12 staff, and your Designation is Director");
}

//Display grand master of the company
else{
    console.log("You are a level god staff, and your Designation is Grand Master");
}