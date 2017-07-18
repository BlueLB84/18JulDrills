//   original for loop
/*  function max(numbers) {  
  var currentMax = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] > currentMax) {
       currentMax = numbers[i];
    }
  }
  return currentMax;
*/

function max(numbers) {
    let currentMax = numbers[0];
    let i = 0;
 while (i <= numbers.length) {
     if (numbers[i] > currentMax) {
         currentMax = numbers[i];
     } 
     i++;
 }
    return currentMax;
}

//  original for loop
/*  function min(numbers) {
  
  var currentMin = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] < currentMin) {
       currentMin = numbers[i];
    }
  }
  return currentMin;
}
*/

function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
 while (i <= numbers.length) {
     if (numbers[i] < currentMin) {
         currentMin = numbers[i];
     } 
     i++;
 }
    return currentMin;
}

// original function