console.log("good")

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    if (b == 0){
        return noDizero()
    }
    return a/b
}
function operate(operator,a,b){
    switch (operator){
    case '+' : return add(a,b)
        break;
    case '-' : return subtract(a,b)
        break;
    case '*' : return multiply(a,b)
        break;
    case '/' : return divide(a,b)
        break;
    }
}
function noDizero () {
    alert("Division by zero is undifined");
}
const btnNum = document.querySelectorAll('.number');

//-------Number Button----------------------//
let arrayValueA = [];
let arrayValueB = [];
let valueA = 0;
let valueB = 0;
let total = 0;
let inputArray = [];
let operator = "+";

btnNum.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert(btn.innerText);
        inputArray.push(btn.innerText);
    })
})

//-----------Operator Button----------------//
const btnOper = document.querySelectorAll('.operate');

btnOper.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert(btn.innerText);
        operator = btn.innerText;

        if (arrayValueA.length >0 && arrayValueB.length >0){
            valueA = Number(arrayValueA.join(''));
            valueB = Number(arrayValueB.join(''));
            total = operate(operator,valueA,valueB);
        }

        if (arrayValueA.length == 0 ){
        arrayValueA = inputArray.slice();
        inputArray.length = 0;
        }
        else {
            arrayValueB = inputArray.slice();
            inputArray.length = 0
        }

    })
})

const btnEqu = document.querySelector('.equal');

btnEqu.addEventListener('click', () => {
    alert(btnEqu.innerText);
});

const btnClear = document.querySelector('.clear');

btnClear.addEventListener('click', () => {
    alert(btnClear.innerText);
});

const btnUndo = document.querySelector('.undo');

btnUndo.addEventListener('click', () => {
    alert(btnUndo.innerText);
});

function displayNumber (dis1,dis2){

}