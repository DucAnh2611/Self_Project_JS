window.onload = () => {
    document.addEventListener("mousemove",(event) => {
        var xMouse = event.clientX;
        var yMouse = event.clientY;
    
        var divMain = document.querySelector(".mainBoard");
        var windowHeight = divMain.clientHeight;
        var windowWidth = divMain.clientWidth;
        let eyeIn = document.querySelectorAll(".eyeIn");

        eyeIn.forEach(item=> {
            let eyeSide = item.parentElement.parentElement;
            
            let itemParentSideX = windowWidth - (eyeSide.offsetLeft + eyeSide.clientWidth/2);
            let itemParentSideY = windowHeight - (eyeSide.offsetTop + eyeSide.clientHeight/2);
            if(xMouse < eyeSide.offsetLeft + eyeSide.clientWidth/2) {
                itemParentSideX = windowWidth - itemParentSideX;
                itemParentSideY = windowHeight - itemParentSideY;

                item.style.top = (50 - Math.round((itemParentSideY - yMouse)/itemParentSideY *100)/2).toString() +"%"; 
                item.style.left = (50 - Math.round((itemParentSideX - xMouse)/itemParentSideX *100)/2).toString() +"%"; 
            }
            else {
                item.style.top = (50 + Math.round((yMouse - (windowHeight-  itemParentSideY))/itemParentSideY *100)/2).toString() +"%"; 
                item.style.left = (50 + Math.round((xMouse - (windowWidth-  itemParentSideX))/itemParentSideX *100)/2).toString() +"%"; 
            }
        })

    });
    let topEyeBlink = document.querySelectorAll(".top");
    let bottomEyeBlink = document.querySelectorAll(".bottom");

    let timeRandomBlink = 2000;
    let timeReset = 200;

    let resetBlinkEyes = setInterval(()=> {
        topEyeBlink.forEach((item, index) => {
            bottomEyeBlink[index].style.height = "0%";
            item.style.height = "0%";
        });
    }, timeReset);
    let blinkEyes = setInterval(()=> {
        topEyeBlink.forEach((item, index) => {
            bottomEyeBlink[index].style.height = "50%";
            item.style.height = "50%";
        })
        resetBlinkEyes;
    }, timeRandomBlink);
    blinkEyes;

    setInterval(()=> {
        let todayDate = new Date();
        let hoursNow = todayDate.getHours();
        let minutesNow = todayDate.getMinutes();
        let secoundsNow = todayDate.getSeconds();
        
        document.querySelector(".hoursTimer").innerHTML = smtLessThan10(hoursNow);
        document.querySelector(".minutesTimer").innerHTML = smtLessThan10(minutesNow);
        document.querySelector(".secoundsTimer"). innerHTML = smtLessThan10(secoundsNow);

        document.querySelector(".daysTimer").innerHTML = ' <p class = "noneTitle" >Ngày </p>' + smtLessThan10(todayDate.getDate()); 
        document.querySelector(".monthsTimer").innerHTML = '<p class = "noneTitle" >Tháng </p>' + smtLessThan10(todayDate.getMonth() +1);
        document.querySelector(".yearsTimer").innerHTML = '<p class = "noneTitle" >Năm  <p>' + smtLessThan10(todayDate.getFullYear());

    } , 1000);

    let getTheme = document.querySelector(".toggleCheckBox");
    let changeColor = ["#2B3A55", "#CE7777", "#E8C4C4", "#F2E5E5"];
    getTheme.addEventListener("click",() => {
        let root = document.documentElement;
        let nowColor = [];
        for(let i =1; i<=4;i++) {
            nowColor.push(getComputedStyle(root).getPropertyValue("--color" + i.toString()));
            root.style.setProperty("--color"+i.toString(), changeColor[i-1]);
        }
        changeColor = nowColor;
    })
}
function smtLessThan10(data) {
    if(data< 10) {
        return "0" + data;
    }
    return data;
}