
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

function keyboardInput(e){



}

let displayValue = document.querySelector(".result");

let buttons = document.querySelectorAll(".button")

for(let i = 0; i < buttons.length; i++){ 
    buttons[i].addEventListener("click", buttonPress)
};

document.addEventListener("keyup", keyboardInput)


document.onkeyup = function(e){
    if (e.key === "*"){
        buttons[13].click();
    } else if (e.key === "/"){
        buttons[17].click();
    } else if (e.key === "Backspace"){
        buttons[1].click();
    } else if (e.key === "a"){
        buttons[0].click();
    } else if (e.key === "1"){
        buttons[2].click();
    } else if (e.key === "2"){
        buttons[3].click();
    } else if (e.key === "3"){
        buttons[4].click();
    } else if (e.key === "4"){
        buttons[6].click();
    } else if (e.key === "5"){
        buttons[7].click();
    } else if (e.key === "6"){
        buttons[8].click();
    } else if (e.key === "7"){
        buttons[10].click();
    } else if (e.key === "8"){
        buttons[11].click();
    } else if (e.key === "9"){
        buttons[12].click();
    } else if (e.key === "0"){
        buttons[14].click();
    } else if (e.key === "."){
        buttons[15].click();
    } else if (e.key === "Enter"){
        buttons[16].click();
    } else if (e.key === "+"){
        buttons[5].click();
    } else if (e.key === "-"){
        buttons[9].click();
    }
};
