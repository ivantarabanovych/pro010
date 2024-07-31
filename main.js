function sum(a, b, callback) {
    const result = a + b;
    callback(result);
}

function display(result){
    console.log(`Sum two number: ${result}`)
}

sum (5, 3, display);