function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let a;
let op;
let b;

function operate(a, op, b){
    if (op === "+"){
       return add(a, b);
    } else if (op === "-"){
       return subtract(a, b);
    } else if (op === "*"){
       return multiply(a, b);
    } else if (op === "/"){
       return divide(a, b);
    }
}

console.log(operate(45, "*", 63))