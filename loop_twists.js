function max(numbers) {
  // we set `currentMax` to the value
  // of first item in `numbers`,
  // then we loop through `numbers`,
  // comparing each item to `currentMax`.
  // if the item is greater than `currentMax`,
  // we set `currentMax` to that number.
  var currentMax = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] > currentMax) {
       currentMax = numbers[i];
    }
  }
  return currentMax;
}


function min(numbers) {
  // we set `currentMin` to the value
  // of first item in `numbers`,
  // then we loop through `numbers`,
  // comparing each item to `currentMin`.
  // if the item is less than `currentMin`,
  // we set `currentMin` to that number.
  var currentMin = numbers[0];
  for (var i=0; i <= numbers.length; i++) {
    if (numbers[i] < currentMin) {
       currentMin = numbers[i];
    }
  }
  return currentMin;
}