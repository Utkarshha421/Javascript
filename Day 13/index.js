// map function -> loop -> replaces the each element with the given operation
// x -> single element -> we can assign any word or values than x
// map(awdiz){
// awdiz*2
// }
// we dont have to assign starting ending sequence like for loop in map , it automatically understands.
//Array.prototype.map() ===>>
const array = [1, 2, 3, 4];
const output = array.map((x) => x * 2);
console.log(output);   //we get whole array as output.

//Array.prototype.reduce() ===>>
const array1 = [1, 2, 3, 4, 5];
const initialval = 0;
const addition = array1.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  initialval
);
console.log(addition);

//array.concat() ==> combines the arrays
const array2=[1,2,3];
const array3=[4,5,6];
const combinedArray=array2.concat(array3);
console.log(combinedArray);
const combinedArray1=array3.concat(array2);
console.log(combinedArray1);

//array.find() ==> finds the no based on condition
const numbers = [1, 2, 3, 4, 5, 6];
const ans = numbers.find((number) => number > 4);
console.log(ans);

//Array.findIndex()
const number = [5, 6, 7, 8, 9];
const index = number.findIndex((value) => value > 4);
console.log(index);

//Array.includes()
const data = [1, 2, 3, 4, "cat", "dog"];

const isExist = data.includes("abc");
console.log(isExist);

//Array.prototype.forEach() ===>>
// we get single elements in forEach()
