// function addition() {
//     var number1 = 10;
//     var number2 = 10;
//     return number1 + number2;
//     console.log("Hiii");
//   }
//   const answer = addition();
  
//   function IncreaseNumberOfProduct() {
//     var product = 1000;
//     return product + product;
//   }
//   const price = IncreaseNumberOfProduct();
  
  
//   function Addition(kuchbhi, secondValue) {
//     return kuchbhi + secondValue;
//   }
//   function Subtract(kuchbhi, secondValue) {
//     return kuchbhi - secondValue;
//   }
//   function Multi(kuchbhi, secondValue) {
//     return kuchbhi * secondValue;
//   }
//   function Divid(kuchbhi, secondValue) {
//     return kuchbhi / secondValue;
//   }
  
//   console.log(Addition(number1, number2));
//   console.log(Subtract(number1, number2));
//   console.log(Multi(number1, number2));
//   console.log(Divid(number1, number2));
  
//   function CheckNumberIsEvenOrOdd(number) {
//     if (number % 2 === 0) {
//       console.log("Even");
//     } else {
//       console.log("Odd");
//     }
//   }
//   CheckNumberIsEvenOrOdd(10);
  
  // Array
    
//   var students = ["Virat", "Rohit", "Rahul"];
//   console.log(students, "students");
//   console.log(students.length);
//   console.log(students[0]);
//   console.log(students[2]);
//   console.log(students[students.length - 1]);
  
  
  // Q. Print numbers from 1 to 5, by using for loop.
  
//   for (var i = 1; i <= 5; i++) {
//     console.log(i);
//   }
  
  // Q Print number from 10 to 60 with gap of 4;
  
//   for (var i = 10; i <= 60; i += 4) {
//     console.log(i);
//   }
  
  // Q . Print number from 33 to 76 with gap of 3 but number also must be even
  
//   for (var i = 33; i <= 76; i += 3) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }

  
  // Whats the addition of number from 23 to 89 with gap of 2 and number must be odd.
  
//   var Count = 0;
//   for (var i = 23; i <= 89; i += 2) {
//     if (i % 2 === 1) {
//       console.log(i);
//       Count += i;
//     }
//   }
//   console.log(Count);
    

  
  var finalCount;
  for (var i = 1; i <= 5; i++) {
    if (finalCount == undefined) {
      finalCount = i;
    } else {
      finalCount = finalCount * i;
    }
  }
  console.log(finalCount);
  
//   var number = 10;
//   number = number + 1;
//   number += 3;
//   number++;
//   number++;
//   number++;
//   console.log(number);
  
//   var number = 10;
//   number = number - 1;
//   number -= 10;
//   number--;
//   console.log(number);