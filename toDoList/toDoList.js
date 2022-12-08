window.onload = ()=>{
    var selectionList = document.querySelector(".selectRank");
    selectionList.addEventListener("input", () => {
        selectionList.className="selectRank";
        selectionList.classList.add(selectionList.value)
    })

    var btnSumit = document.querySelector(".submitButton");
    btnSumit.addEventListener("click", () => {
        let nameOfAddThing = document.querySelector(".nameThingInput");
        let rateOfAddThing = document.querySelector(".selectRank");

        if(nameOfAddThing.value != "" && rateOfAddThing.value != "default") {
            let tableHolder = document.querySelector(".tableHolder");

            if(tableHolder.lastElementChild.className == "nothingInList") {
                document.querySelector(".nothingInList").style.display = "none";
            }
            let divThing = document.createElement("div");
            divThing.className = "divThing " + rateOfAddThing.value;
            
            let nameThingDiv = document.createElement("p");
            nameThingDiv.className ="name ThingDiv";
            let nameThing = document.createElement("p");
            nameThing.className ="nameThingDB";
            nameThing.innerHTML = nameOfAddThing.value;

            let rankThingDiv = document.createElement("p");
            rankThingDiv.className = "rank ThingDiv";
            let rankThing = document.createElement("p");
            rankThing.className = "rankThingDB";
            rankThing.innerHTML = rateOfAddThing.value;

            let imgFixDiv = document.createElement("div");
            imgFixDiv.className = "fix ThingDiv";
            let imgFix = document.createElement("img");
            imgFix.className = "imgFix";
            imgFix.src= "pen-solid.svg";

            let imgRemoveDiv = document.createElement("div");
            imgRemoveDiv.className = "remove ThingDiv";
            let imgRemove = document.createElement("img");
            imgRemove.className = "imgRemove";
            imgRemove.src= "trash-can-solid.svg";
            imgRemove.addEventListener("click", ()=>{
                divThing.remove();
                document.querySelector(".nothingInList").style.display = null;
            });

            let checkBoxDoneDiv = document.createElement("div");
            checkBoxDoneDiv.className = "checkBox ThingDiv";
            let checkBoxDone = document.createElement("input");
            checkBoxDone.className = "checkBoxDone";
            checkBoxDone.type = "checkbox";

            checkBoxDone.addEventListener("click", (event)=> {
                if(event.target.checked== true) {
                    divThing.classList.add("Done");
                }else {
                    divThing.classList.remove("Done");
                }
            })

            tableHolder.appendChild(divThing);
            divThing.appendChild(nameThingDiv);
                nameThingDiv.appendChild(nameThing);
            divThing.appendChild(rankThingDiv);
                rankThingDiv.appendChild(rankThing);
            divThing.appendChild(imgFixDiv);
                imgFixDiv.appendChild(imgFix)
            divThing.appendChild(imgRemoveDiv);
                imgRemoveDiv.appendChild(imgRemove)
            divThing.appendChild(checkBoxDoneDiv);
                checkBoxDoneDiv.appendChild(checkBoxDone);
            nameOfAddThing.value = null;
            rateOfAddThing.value = "default";
        }
    });

    var btnClear = document.querySelector(".clearList");
    btnClear.addEventListener("click", ()=> {
        let tableHolder = document.querySelector(".tableHolder");
        while(tableHolder.lastElementChild !=null && tableHolder.lastElementChild.className !="nothingInList") {
            tableHolder.lastElementChild.remove();
        }
        document.querySelector(".nothingInList").style.display = null;
    })

    var filterButton = document.querySelector(".filerIcon");
    filterButton.addEventListener("click", () => {
        
    })
}