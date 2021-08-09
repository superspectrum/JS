function timeOfDay(){
    var today = new Date();
    var hour = today.getHours();
    var person = prompt("Please enter your name:", "John Doe");
    
    if (hour >= 5 && hour < 12) {
        alert("Good Morning, " + person + "! Thank you for reviewing my resume website.");
    } else if (hour >= 12 && hour < 18) {
        alert("Good Afternoon, " + person + "! Thank you for reviewing my resume website.");
    } else if (hour >= 18) {
        alert("Good Evening, " + person + "! Thank you for reviewing my resume website.");
    } else {
        alert("There has been a glitch in the Matrix!");
    }
};




// let n1 = 22;
// for(let i = 1; i <= 22; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }else {
//     console.log("");
//   }
// }

// var multiply = 9;
// for(let i = 0; i <=10; i++) {
//   var result = multiply * i;
//   console.log(multiply + "*" + i + "=" + result);
// }

//let arr1 = [1,2,3,4,5];
//let arr2 = [1,2,3,4,5];
//let rollSum = 0;
//for(let i = 0; i < arr1.length; i++) {
//  rollSum += arr1[i] + arr2[i];
//  
//}
//document.write("<br>" + rollSum);

// function fizzBuzz() {
//   for(let i = 0; i <= 100; i++) {
//     if(i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     }else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

//function myFunction(){
//    var txt;
//    var person = prompt("Please enter your name:", "John Doe");
    
//    if (person == null || person == "") {
//        txt = "User cancelled the prompt";
//    } else {
//        txt = "Hello " + person + ", it's nice to meet you!";
//    } 

//    document.getElementById("txt").innerHTML = txt; 
//}
// var yourName = prompt("Thank you for visiting my page, can I get your name?");
//   alert("Welcome " + yourName + ", it's nice to meet you!")
// if (yourName !== null) {
//   document.getElementById("name").innerHTML = "Hello, " + yourName + "!";
// } else {
//   alert("Please enter a valid name.");
// }