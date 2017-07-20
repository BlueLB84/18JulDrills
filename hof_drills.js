// *****  Functions as arguments (1)  *****
function hello() {
    return 'Hello world';
}

function goodbye() {
    return 'Goodbye world';
}

function repeat(fn, n) {
    for (let i = 1; i <= n; i++) {
        console.log(fn());
    }
}

repeat(hello, 5);
repeat(goodbye, 5);





// *****  Functions as arguments (2)  *****
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ( fn(arr[i]) ) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filteredNames);





// *****  Functions as return values  *****
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const flooding = hazardWarningCreator('Road under water');
const londonBridge = hazardWarningCreator('Bridge collapse');

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function func(location) {
        warningCounter += 1;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

flooding('Rogers road and Blue Hill Valley Drive');
flooding('Construction Ave and Tango Trail');





// *****  filter, map, forEach  ****** //
    
// ***** filter *****
    // run filter() method on given turtle movement array
    // test that the array has to pass is:
    // At each outer array index, is the first or second inner array index number negative?
    //      if negative number, filter out

const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

var backwardsRight = turtleMovements.filter(function(movement) {
    if ( (movement[0] < 0) || (movement[1] < 0) ) {
        return movement;
    }
})

console.log(backwardsRight);





// *****  map  *****

const movingTurtle = turtleMovements.map(function(movement) {
    return movement[0] + movement[1];
})

console.log(movingTurtle);




// ***** forEach  *****
// loop through each array item using forEach method
// set both numbers of each array item to their absolute value

turtleMovements.forEach(function(movement) {
    console.log(Math.abs(movement[0]) + Math.abs(movement[1]));
});









