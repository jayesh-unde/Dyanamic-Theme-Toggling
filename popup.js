if(document.querySelector(".pop")){
const button = document.querySelector(".button");
const circle = document.querySelector(".circle");

let buttonOn = false;

button.addEventListener("click",()=>{
    if(!buttonOn){
        buttonOn = true;
        circle.style.animation = "moveCircleRight 0.7s forwards";
        button.style.animation = "bgyellow 0.7s forwards";
        chrome.tabs.executeScript({
            file: "appOn.js"
        })
    }else{
        buttonOn = false;
        circle.style.animation = "moveCircleleft 0.7s forwards";
        button.style.animation = "bgblue 0.7s forwards";
        chrome.tabs.executeScript({
            file: "appOff.js"
        })
    } 
    
})
}
