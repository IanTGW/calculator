function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a, b){
    return Number(a) / Number(b);
}

function equals(a, b){
    return Number(a);
}

let a = 0;
let op = "+";
let b = 0;

function operate(a, op, b){
    if (op === "+"){
        return add(a, b);
    } else if (op === "-"){
        return subtract(a, b);
    } else if (op === "×"){
        return multiply(a, b);
    } else if (op === "÷"){
        return divide(a, b);
    } else if (op === "="){
        return equals(a, b);
    }
}

function rounded(number){
    if(number.toString().length > 11){
        return Number(number).toPrecision(7);
    } else {
        return Number(number);
    }
}

let lastType = "number";

function buttonPress(){
    if(this.classList.contains("number")){
            if(b === 0){
                b = this.textContent
                displayValue.textContent = b;
            } else {
                b += this.textContent;
                displayValue.textContent = rounded(b);
            }
            lastType = "number";
    } else if(this.classList.contains("operator")){
            if (b === "."){
                b = 0;
            }
            if (lastType === "arithmetic" && this.id === "eval"){
                displayValue.textContent = "Enter a value!";
                lastType = "operator";
            } else if(lastType === "operator" && this.id === "eval"){
                displayValue.textContent = "Enter a value!";
                lastType = "operator";
            } else if(lastType === "operator"){
                if( a === Infinity || a === -Infinity || isNaN(a)){
                        displayValue.textContent = "Error"
                    } else {
                    displayValue.textContent = rounded(a);
                    op = this.textContent;  
                    }
                lastType = "operator";
            } else {
                a = operate(a, op, b);
                b = 0;
                op = this.textContent;
                if( a === Infinity || a === -Infinity || isNaN(a)){
                    displayValue.textContent = "Error"
                } else if( op === "=" ){
                    displayValue.textContent = rounded(equals(a, b));
                } else {
                    displayValue.textContent = rounded(a);
                }
                if(this.classList.contains("arithmetic")){
                    lastType = "arithmetic";
                } else {
                    lastType = "operator";
                }
            }
    } else if (this.classList.contains("clear")){
            b = 0;
            displayValue.textContent = b;
    } else if (this.classList.contains("allClear")){
            a = 0;
            op = "+";
            b = 0;
            displayValue.textContent = b;
    }
}

let displayValue = document.querySelector(".result");

let buttons = document.querySelectorAll(".button")

for(let i = 0; i < buttons.length; i++){ 
    buttons[i].addEventListener("click", buttonPress)
};

