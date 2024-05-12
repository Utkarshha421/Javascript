// Binary search

let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let target = 8;
function FindTarget(array, target) {
  let left = 0;
  let right = array.length - 1;  //9 

  while (left <= right) {    //0 <= 9 true //0 <= 3 true // 2<3 true // 3<=3 true
    var midIndex = Math.floor((left + right) / 2);  //4.5-->4 // 1.5 --> 1 // 2.5 --> 2 // 3
    if (array[midIndex] === target) {       //10===8 false // 4===8 false //6===8 false //8===8 true
      return midIndex;
    } else if (array[midIndex] < target) {   //10<8  false // 4<8 true // 6<8 true
      left = midIndex + 1;       //left=1+1=2 // left=2+1=3
    } else {
      right = midIndex - 1;       //10>8 true right=3
    }
  }
}
console.log(FindTarget(array, target));  // midIndex==3
