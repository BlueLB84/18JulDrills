// Functions as arguments (1)
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