window.onload = () => {
    let firstNumber = 0, secoundNumber = 0, resultNumber = 0, methodCalculateTocal = "+";
    let lastAction = 0, calculated = false, firstNumberDone =false, inputMedthodDone = false, firstCal = false;
    let resultScreen = document.querySelector(".resultCalculator");
    var buttonNumber = document.querySelectorAll(".number");
    buttonNumber.forEach(item => {
        item.addEventListener("click", (event)=>{
            if(inputMedthodDone) {
                resultScreen.innerHTML=null;
                inputMedthodDone = false;
            }
            if(calculated) {
                resultScreen.innerHTML=null;
                calculated = false;
            } 
            if(event.target.innerHTML ==".") {
                if(!resultScreen.innerHTML.includes(".")) {
                    resultScreen.innerHTML += ".";
                }
                
            }
            else {
                resultScreen.innerHTML += event.target.innerHTML;
            }
            lastAction =0 ;
        })
    });   


    var buttonMethodCalculate = document.querySelectorAll(".methodCalculate");
    buttonMethodCalculate.forEach(item => {
        item.addEventListener("click", () => {
            if(resultScreen.innerHTML  != "" && resultScreen.innerHTML  != ".") {
                if(lastAction == 1){
                    resultScreen.innerHTML = item.innerHTML;
                    methodCalculateTocal = resultScreen.innerHTML;
                } else {
                    if(firstNumberDone) {
                        secoundNumber = parseFloat(resultScreen.innerHTML);
                    } else {
                        firstNumber = parseFloat(resultScreen.innerHTML);
                    }
                    if(firstCal){
                        resultNumber = 0;
                        calculated = true;
                        resultNumber = calculateNumber(firstNumber, methodCalculateTocal, secoundNumber);
                        resultScreen.innerHTML = Math.round(resultNumber*1000)/1000;
                        firstNumber = parseFloat(resultScreen.innerHTML);
                        secoundNumber = 0;
                    }
                    methodCalculateTocal = "";
                    methodCalculateTocal = item.innerHTML;
                    firstNumberDone = true;
                    inputMedthodDone = true;
                    firstCal = true;                    
                }
                let displayMethod = document.querySelectorAll(".methodFloatingSelection");
                displayMethod.forEach(element => {
                    if(element.innerHTML == methodCalculateTocal) {
                        displayMethod.forEach(child => {child.classList.remove("AvtiveMethod");});
                        element.classList.add("AvtiveMethod");

                    }
                })
            }     
            lastAction=1;       
        })
    })
    var buttonClearDataAll = document.querySelector(".clearDataAll");
    buttonClearDataAll.onclick = () =>{
        firstNumber = 0, secoundNumber = 0, resultNumber = 0, methodCalculateTocal;
        lastAction = 0, calculated = false, firstNumberDone =false, inputMedthodDone = false, firstCal = false;
        resultScreen.innerHTML=null;
        let displayMethod = document.querySelectorAll(".methodFloatingSelection");
        displayMethod.forEach(element => {
            element.classList.remove("AvtiveMethod");
        })
    }
    var buttonClearData = document.querySelector(".clearData");
    buttonClearData.onclick = () =>{
        resultScreen.innerHTML = resultScreen.innerHTML.slice(0,-1);
    }

    var buttonCalculator = document.querySelector(".calculator");
    buttonCalculator.onclick = ()=> {
        if(firstNumberDone) {
            secoundNumber = parseFloat(resultScreen.innerHTML);
        } else {
            firstNumber = parseFloat(resultScreen.innerHTML);
        }
        resultNumber = 0;
        resultNumber = calculateNumber(firstNumber, methodCalculateTocal, secoundNumber);
        calculated = true;
        resultScreen.innerHTML = Math.round(resultNumber*1000)/1000;
        addToHistory(firstNumber, secoundNumber, methodCalculateTocal, parseFloat(resultScreen.innerHTML));
        firstNumber = parseFloat(resultScreen.innerHTML);
        secoundNumber = 0;

        firstCal = false;
        lastAction= 2
    }

    var changInputInHover = document.querySelectorAll(".canChangeInput");
    changInputInHover.forEach(item => {
        item.oninput = () => {
            if(item.value == "") {
                    item.value = 0;
            }
            firstNumber = parseFloat(changInputInHover[0].value);
            secoundNumber = parseFloat(changInputInHover[2].value);
            methodCalculateTocal = changInputInHover[1].value;
            if(typeof(calculateNumber(firstNumber, methodCalculateTocal, secoundNumber)) == "number") {
                resultScreen.innerHTML = Math.round(calculateNumber(firstNumber, methodCalculateTocal, secoundNumber)*1000)/1000;
            } else {resultScreen.innerHTML = calculateNumber(firstNumber, methodCalculateTocal, secoundNumber);}
            let displayMethod = document.querySelectorAll(".methodFloatingSelection");
            displayMethod.forEach(element => {
                if(element.innerHTML == methodCalculateTocal) {
                    displayMethod.forEach(child => {child.classList.remove("AvtiveMethod");});
                    element.classList.add("AvtiveMethod");

                }
            })
        }
    })

    document.querySelector(".toggleMain").onclick = () => {
        
    }
    
}
function calculateNumber(firstNumber, methodCalculateTocal, secoundNumber) {
    let resultMethod = document.querySelector(".resultMethod");
    let resultFirstNumber = document.querySelector(".resultFirstNumber");
    let resultSecoundNumber = document.querySelector(".resultSecoundNumber");

    resultFirstNumber.value = firstNumber;
    resultMethod.value = methodCalculateTocal;
    resultSecoundNumber.value = secoundNumber
    switch(methodCalculateTocal) {
        case "+":
            return firstNumber + secoundNumber;
        case "-":
            return firstNumber - secoundNumber;
        case "*":
            return firstNumber * secoundNumber;
        case "/":
            if(secoundNumber == 0) {
                return "Can not divide!";
            }
            else {
                return firstNumber / secoundNumber;
            }
        default:
            return firstNumber;
    }
}
function addToHistory(firstNumber, secoundNumber, methodCalculate, resultNumber) {
    let listDataHis = document.querySelector(".historyDatas");

    let divAData = document.createElement("div");
    divAData.className = "historyDivAData";

    let divFirstNumber = document.createElement("div");
    divFirstNumber.className = "historyDivData";
    let textFirstNumber = document.createElement("p");
    textFirstNumber.className = "historyNameData";
    let inputFirstNumber = document.createElement("p");
    inputFirstNumber.className = "historyTextData";
    inputFirstNumber.innerHTML = firstNumber;


    let divSecoundNumber = document.createElement("div");
    divSecoundNumber.className = "historyDivData";
    let textSecoundNumber = document.createElement("p");
    textSecoundNumber.className = "historyNameData";
    let inputSecoundNumber = document.createElement("p");
    inputSecoundNumber.className = "historyTextData";
    inputSecoundNumber.innerHTML =secoundNumber;

    let divMethod = document.createElement("div");
    divMethod.className = "historyDivData";
    let textMethod = document.createElement("p");
    textMethod.className = "historyNameData";
    let inputMethod = document.createElement("p");
    inputMethod.className = "historyTextData";
    inputMethod.innerHTML = methodCalculate;

    let divResultNumber = document.createElement("div");
    divResultNumber.className = "historyDivData";
    let textResultNumber = document.createElement("p");
    textResultNumber.className = "historyNameData";
    let inputResultNumber = document.createElement("p");
    inputResultNumber.className = "historyTextData";
    inputResultNumber.innerHTML = resultNumber;

    listDataHis.appendChild(divAData);
    divAData.appendChild(divFirstNumber);
        divFirstNumber.appendChild(textFirstNumber);
        divFirstNumber.appendChild(inputFirstNumber);
    divAData.appendChild(divMethod);
        divMethod.appendChild(textMethod);
        divMethod.appendChild(inputMethod);
    divAData.appendChild(divSecoundNumber);
        divSecoundNumber.appendChild(textSecoundNumber);
        divSecoundNumber.appendChild(inputSecoundNumber);
    divAData.appendChild(divResultNumber);
        divResultNumber.appendChild(textResultNumber);
        divResultNumber.appendChild(inputResultNumber );
}