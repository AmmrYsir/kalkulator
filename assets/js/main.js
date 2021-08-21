let boolPoint = false;
let boolOperation = false;

let inputDiv = getElement("#input");

function calculatorButton(type, value) {
    switch (type) {
        case "point":
            if (!boolPoint) {
                if (
                    parseInt(inputDiv.innerHTML.substr(-1)) &&
                    inputDiv.innerHTML != "0"
                )
                    inputDiv.innerHTML += value;
                else inputDiv.innerHTML += value;
            }
            boolPoint = true;
            break;
        case "divide":
        case "multiplication":
        case "minus":
        case "plus":
            if (!boolOperation) inputDiv.innerHTML += value;
            boolOperation = true;
            boolPoint = false;
            break;
        default:
            inputDiv.innerHTML += value;

            if (boolOperation) boolOperation = false;
    }
}

function back(value = "") {
    let lastCharacter =
        value == "" ? inputDiv.innerHTML.slice(-1) : value.slice(-1);
    if (lastCharacter != "") {
        switch (lastCharacter) {
            case " ":
                back(inputDiv.innerHTML.slice(0, -1));
                break;
            case "+":
            case "-":
            case "/":
            case "*":
                inputDiv.innerHTML = inputDiv.innerHTML.slice(0, -3);
                boolOperation = false;
                break;
            case ".":
                inputDiv.innerHTML = inputDiv.innerHTML.slice(0, -1);
                boolPoint = false;
                break;
            default:
                inputDiv.innerHTML = inputDiv.innerHTML.slice(0, -1);
        }
    }
}

function clearInput() {
    console.log("clear func");
    inputDiv.innerHTML = "0";
}

function calculate() {
    inputDiv.innerHTML = eval(inputDiv.innerHTML);
}

function getElement(el) {
    return document.querySelector(el);
}
