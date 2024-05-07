//Q print 10 - 1

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Q. Print reversae number from given array, use for loop .

var array = [1, 2, 4, 45, 5, 6, 7];
for (var i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);

}

// Q .  find addition of numbers from array who are odd

var array = [1, 2, 4, 5, 6, 76, 7, 4, 2];
var count = 0; 
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 === 1) {
    count += array[i];
  }
}
console.log(count, "count");

// Q. Given an array find name of student whose lenght is more than 5.
var students = ["rahul", "rohit", "virat", "rishabh"];

for (var i = 0; i < students.length; i++) {
  if (students[i].length > 5) {
    console.log(students[i]);
  }
}