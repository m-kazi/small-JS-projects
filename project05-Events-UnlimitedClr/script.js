//generate a random color from hex value
//create a method
//Math.random * by 16 coz need 16 value here
//Running loop on hexCode
// console.log(Math.floor(Math.random() * 16));
const randomColor = function () {
    const hexCode = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)];
    }
    return color;
};

//creating 2 methods for changing color
let intervalId;

//Method to start changing color
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

//Method to stop changing color
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

//Buttons clicking action
document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
