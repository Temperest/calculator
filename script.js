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
        return noDizero()
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
function noDizero() {
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
let inputOperator = "";
let operator = "";
let topBar = document.querySelector('.topBar');
let lowBar = document.querySelector('.lowBar');

btnNum.forEach((btn) => {
    btn.addEventListener('click', () => {
        // alert(btn.innerText);
        inputArray.push(btn.innerText);
        loDis(inputArray);
    })
})

//-----------Operator Button----------------//
const btnOper = document.querySelectorAll('.operate');

btnOper.forEach((btn) => {
    btn.addEventListener('click', () => {
        // alert(btn.innerText);
        inputOperator = btn.innerText;

        if (arrayValueA.length == 0) {
            arrayValueA = inputArray.slice();
            inputArray.length = 0;
        }
        else {
            arrayValueB = inputArray.slice();
            inputArray.length = 0
            valueA = Number(arrayValueA.join(''));
            valueB = Number(arrayValueB.join(''));
            operator = inputOperator

            total = operate(operator,valueA,valueB);

            arrayValueA = Array.from(String(total), Number);

            upDis(arrayValueA,operator)
            loDis(total);
            return
        }
        upDis(arrayValueA,inputOperator,[])
    })
})

const btnEqu = document.querySelector('.equal');

btnEqu.addEventListener('click', () => {
    // alert(btnEqu.innerText);
    arrayValueB = inputArray.slice();
    inputArray.length = 0
    valueA = Number(arrayValueA.join(''));
    valueB = Number(arrayValueB.join(''));
    operator = inputOperator
    upDis(arrayValueA,operator,arrayValueB)
    total = operate(operator,valueA,valueB)
    arrayValueA = Array.from(String(total), Number);
    loDis(total);
});

const btnClear = document.querySelector('.clear');

btnClear.addEventListener('click', () => {
    // alert(btnClear.innerText);
    arrayValueA = [];
    arrayValueB = [];
    valueA = 0;
    valueB = 0;
    total = 0;
    inputArray = [];
    inputOperator = "";
    operator = "";
    topBar.innerText = '0';
    lowBar.innerText = '0';
});

const btnUndo = document.querySelector('.undo');

btnUndo.addEventListener('click', () => {
    // alert(btnUndo.innerText);
    inputArray.splice(-1);
    loDis(inputArray);
});

function upDis(dis1,dis2,dis3) {
    if ( Array.isArray(dis3)){
    topBar.innerText = dis1.join("") + dis2 + dis3.join('');
    }else {
    topBar.innerText = dis1.join("") + dis2;
    }

}

function loDis(disa,disb) {
    if ( Array.isArray(disa) ){
        lowBar.innerText = disa.join("");
    } else {
        lowBar.innerText = disa
    }
}

// document.querySelector(".lowBar").innerText = "456"