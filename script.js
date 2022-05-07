console.log("good")

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    if (b == 0) {
        return lowBar.innerText = "Can't divide zero";
    }
    return a / b
}
function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b)
            break;
        case '-': return subtract(a, b)
            break;
        case '*': return multiply(a, b)
            break;
        case '/': return divide(a, b)
            break;
    }
}

function round(num) {
    return Math.round(num*1000)/1000
}
 

let arrayValueA = [];
let arrayValueB = [];
let valueA = 0;
let valueB = 0;
let total = 0;
let inputArray = [];
let inputOperator = "";
let operator = "";
let topBar = document.querySelector('.topBar');
let lowBar = document.querySelector('.lowBar');
let notNum = document.querySelector('.notnum');

const btnNum = document.querySelectorAll('.number');
btnNum.forEach((btn) => {
    btn.addEventListener('click', () => {
        if ( inputArray.length <= 14){
        inputArray.push(btn.innerText);
        loDis(inputArray);
        } else {
            notNum.style.fontSize = '20px'
            notNum.style.textAlign = 'center'
            notNum.innerText = 'The number have reach the limit of the display';
        }
    })
})

const btnOper = document.querySelectorAll('.operate');

btnOper.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (arrayValueA.length == 0) {
            arrayValueA = inputArray.slice();
            inputArray.length = 0;
            valueA = Number(arrayValueA.join(''));
        }
        else if (inputArray.length == 0 && total > 0) {
            inputOperator = btn.innerText;
            upDis(valueA,inputOperator)
            return
        } 
        else {
            calculator()
        }
    inputOperator = btn.innerText;
    upDis(valueA,inputOperator)
    })
})

const btnEqu = document.querySelector('.equal');

btnEqu.addEventListener('click', () => {
    if (arrayValueA.length == 0 && arrayValueB.length == 0){
        return
    }
    else if (inputArray.length == 0 && total > 0) {
        return
    } 
    else {
        calculator()
    }
});

function calculator() {
    arrayValueB = inputArray.slice();
    inputArray.length = 0
    valueB = Number(arrayValueB.join(''));
    operator = inputOperator

    upDis(valueA,operator,arrayValueB)

    total = round(operate(operator,valueA,valueB));
    valueA = total;

    if (isNaN(total)){ 
        topBar.innerText = "ERROR!";
        clear();
        return 
    }else{
        loDis(total);
    }
}

const btnClear = document.querySelector('.clear');

btnClear.addEventListener('click', () => {
    clear();
    topBar.innerText = '0';
    lowBar.innerText = '0';
});

function clear(){
    arrayValueA = [];
    arrayValueB = [];
    valueA = 0;
    valueB = 0;
    total = 0;
    inputArray = [];
    inputOperator = "";
    operator = "";
}

const btnUndo = document.querySelector('.undo');
btnUndo.addEventListener('click', () => {
    inputArray.splice(-1);
    loDis(inputArray);
});

const btnPe = document.querySelector('.period');
btnPe.addEventListener('click', () => {
    if ( checkPeriod(inputArray)){
        return
    } else{
    inputArray.push(btnPe.innerText)
    loDis(inputArray);
    }
})

function checkPeriod(array) {
    return array.some( element => element == '.')
}

function upDis(dis1,dis2,dis3) {
    if ( Array.isArray(dis3)){
    topBar.innerText = dis1 + dis2 + dis3.join('');
    }else {
    topBar.innerText = dis1 + dis2;
    }
}

function loDis(disa,disb) {
    if ( Array.isArray(disa) ){
        lowBar.innerText = disa.join("");
    } else {
        lowBar.innerText = disa
    }
}

// work in process //
window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[class="${e.key}"]`)
    // console.log(e)
})
