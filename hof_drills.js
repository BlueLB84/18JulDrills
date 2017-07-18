// Functions as arguments (1)
// let hello = () => 'Hello world';
// let goodbye = () => 'Goodbye world';
function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

console.log(repeat(hello, 5));