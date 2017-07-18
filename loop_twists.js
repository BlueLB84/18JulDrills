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

// original "Compute the Average" function
/*  function average(numbers) {
      var summation = 0;
      for (i = 0; i < numbers.length; i++) {
        summation += numbers[i];
      }
      return summation/numbers.length;
    }
*/

function average(numbers) {
    let summation = 0;
    let i = 0;
    while (i < numbers.length) {
        summation += numbers[i];
        i++;
    }
    return summation/numbers.length;
}
//console.log(average([3,6,9,12])); // 7.5

// using forEach();

function average2(numbers) {
    let summation = 0;
    numbers.forEach(function(item){
        summation += item;
        //console.log(summation);
    })
    return summation/numbers.length;
}

//console.log(average2([3,6,9,12])); // 7.5

