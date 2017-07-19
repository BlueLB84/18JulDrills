// // Functions as arguments (1)
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



// Functions as arguments (2)
Return only names that begin with 'R'
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




// Functions as return values
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

console.log(flooding('Rogers road and Blue Hill Valley Drive'));
console.log(flooding('Construction Ave and Tango Trail'));