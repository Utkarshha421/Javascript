// Q given an array find two numbers whos addition is target

let array = [1, 2, 3, 4, 5, 6, 7];
let target = 5;
for (let i = 0; i < array.length; i++) {
  for (let j = i+1; j < array.length; j++) {
    let sum = array[i] + array[j];
    if (sum == target) {
      console.log(array[i], array[j]);
    }
  }
}
