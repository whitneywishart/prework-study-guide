/*if statement
var topic = "HTML";

if (topic === "HTML") {
    console.log("Let's study HTML!");
} else if (topic === "CSS") {
    console.log("Let's study CSS!");
} else if (topic === "Git") {
    console.log("Let's study Git!");
} else if (topic === "JavaScript") {
    console.log("Let's study JavaScript!");
} else {
    console.log("Please try again!")
}

//array
var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);


//for loop
for (
    var x = 0;
    x < shapes.length; x++) {
        //code block
    }

//for loop example stepping though the shapes array
//array
var shapes = ["triangle", "square", "pentagon", "circle"];

//three part conditional statement
for(
    //part 1; loop starting point, declaration of x, representing the first array member (0)
    var x = 0;

    //part 2; condtion statement, continue to loop through the array until the end of the array length
    x < shapes.length;
    
    //part 3; the code block - iterate truough the array, stepping forward by 1 i.e. x++ = the current value of x, plus 1
    x++) {
        console.log(shapes[x]);
    }*/


var topics = ["HTML", "CSS", "Git", "Javascript"];

for (
    var x = 0;
    x < topics.length;
    x++) {
        console.log(topics[x]);
    }