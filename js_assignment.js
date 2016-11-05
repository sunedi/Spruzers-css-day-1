//for loop to count through 1-20
for(i=1; i<=20; i++){
    //test for multiples of 3 and 5 and display number 
    if(i%3==0 & i%5==0){
        console.log("fizzbuzz");
    }
    //test for multiples of 3 and display number 
    else if(i%3==0){
        console.log("fizz");
    }
    //test for multiple of 5 and display number 
    else if(i%5==0){
        console.log("buzz");
    }
    //display number 
    else{
        console.log(i);
    }
}