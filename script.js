let valueA = "";
let valueB = "";
let total = 0;
let inputArray = [];
let inputOperator = "";
let operator = "";
let topBar = document.querySelector('.topBar');
let lowBar = document.querySelector('.lowBar');

const btnNum = document.querySelectorAll('.number');
btnNum.forEach((btn) => {
    btn.addEventListener('click', () => {
        if ( inputArray.length <= 14){
        inputArray.push(btn.innerText);
        loDis(inputArray);
        } else {
            alert('The number have reach the limit of the display');
        }
    })
})

const btnOper = document.querySelectorAll('.operate');

btnOper.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (valueA.length == 0) {
            valueA = Number(inputArray.join(''));
            inputArray.length = 0;
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
    if (valueA.length == 0 && valueB.length == 0){
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
    valueB = Number(inputArray.join(''));
    inputArray.length = 0
    operator = inputOperator

    upDis(valueA,operator,valueB)

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

const btnClear = document.querySelector('#clear');

btnClear.addEventListener('click', () => {
    clear();
    topBar.innerText = '0';
    lowBar.innerText = '0';
});

function clear(){
    valueA = "";
    valueB = "";
    total = 0;
    inputArray = [];
    inputOperator = "";
    operator = "";
}

const btnUndo = document.querySelector('#undo');
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
 

// work in process //
window.onkeydown = function(e){
    let x = e.key;
    let choice
    switch(x){
        case '1':
            choice = document.querySelector('#one');
            choice.click();
            break;
        case '2':
            choice = document.querySelector('#two');
            choice.click();
            break;
        case '3':
            choice = document.querySelector('#three');
            choice.click();
            break;
        case'4':
            choice = document.querySelector('#four');
            choice.click();
            break;
        case '5':
            choice = document.querySelector('#five');
            choice.click();
            break;
        case '6':
            choice = document.querySelector('#six');
            choice.click();
            break;
        case '7':
            choice = document.querySelector('#seven');
            choice.click();
            break;
        case '8':
            choice = document.querySelector('#eight');
            choice.click();
            break;
        case '9':
            choice = document.querySelector('#nine');
            choice.click();
            break;
        case '0':
            choice = document.querySelector('#zero');
            choice.click();
            break;
        case 'Escape':
            choice = document.querySelector('#clear');
            choice.click();
            break;
        case 'Backspace':
            choice = document.querySelector('#undo');
            choice.click();
            break;
        case '^':
            choice = document.querySelector('#exp');
            choice.click();
            break;
        case '/':
            choice = document.querySelector('#divide');
            choice.click();
            break;
        case '*':
            choice = document.querySelector('#multiply');
            choice.click();
            break;
        case '-':
            choice = document.querySelector('#subtract');
            choice.click();
            break;
        case '+':
            choice = document.querySelector('#add');
            choice.click();
            break;
        case '.':
            choice = document.querySelector('#decimal');
            choice.click();
            break;
        case 'Enter':
            choice = document.querySelector('#enter');
            choice.click();
            break;
        default:
    }
}
    // console.log(e)