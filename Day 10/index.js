// let array = [2, 4, 6, 8, 3, 5, 7, 1, 4, 6, 9, 2];
// let target = 10,
//   sum = 0;
// function FindTarget(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       for (let k = j + 1; k < array.length; k++) {
//         sum = array[i] + array[j] + array[k];
//         if (sum == target) {
//           console.log(array[i], array[j], array[k]);
//         }
//       }
//     }
//   }
// }
// FindTarget(array, target);

// let students=[50,70,65,88,90,100];
// students.push("marks");
// console.log(students);

// let marks=[50,70,65,88,90,100];
// marks.pop();
// marks.pop();
// console.log(marks);

// marks.unshift(35);   //marks.unshift(79,35)
// marks.unshift(79);
// console.log(marks);

// marks.shift();
// console.log(marks);

// let FullName=["Aditi","Tejal","Divya"];
// FullName.splice(2,0,"Rutuja");
// console.log(FullName);
// FullName.splice(2,2,"Riddhi");
// console.log(FullName);

let Name=["Aditi","Tejal","Divya","Rutuja","Sakshi"];
console.log(Name.slice(2));
console.log(Name.slice(1,4));
console.log(Name.slice(-2));

let numbers=[50,70,65,88,90,100];
console.log(numbers.toString());

Name.sort();
console.log(Name);
numbers.sort();
console.log(numbers);
numbers.sort((a,b)=>a-b);
console.log(numbers);
numbers.sort((a,b)=>b-a);
console.log(numbers);