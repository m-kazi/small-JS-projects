//Here we are using 'form', we have to et the button value as 'Submit'

const form = document.querySelector("form");

//Form submite as 'GET' or 'POST', here we are preventing the default 'form' action
form.addEventListener("submit", (e) => {
    e.preventDefault();

    //getting the height & weght vlaue, value comes as a 'string', so converting it to an Integar
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const resultGuide = document.querySelector("#result-guide");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Plz give a valid height in cm`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Plz give a valid weight in kg`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6) {
            resultGuide.innerHTML = `You are under weight.`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            resultGuide.innerHTML = `Your weight is perfect.`;
        } else {
            resultGuide.innerHTML = `You are over weight.`;
        }
    }
});
