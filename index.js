/*
1 meter = 3.2808399 feet
1 liter = 0.264172052 gallon
1 kilogram = 2.20462262 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthOutputEl = document.getElementById("length-output-el");
const volumeOutputEl = document.getElementById("volume-output-el");
const massOutputEl = document.getElementById("mass-output-el");


function render(inputNum, toFeet, toMeters, toGallons, toLiters, toPounds, toKilos) {
    lengthOutputEl.textContent = `${inputNum} meters = ${toFeet.toFixed(3)} feet | ${inputNum} feet = ${toMeters.toFixed(3)} meters`;
    volumeOutputEl.textContent = `${inputNum} liters = ${toGallons.toFixed(3)} gallons | ${inputNum} gallons = ${toLiters.toFixed(3)} liters`;
    massOutputEl.textContent = `${inputNum} kilos = ${toPounds.toFixed(3)} pounds | ${inputNum} pounds = ${toKilos.toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", function() {
    if (inputEl.value) {
        let inputNum = Number(inputEl.value);
        
        let metToFeet = inputNum * 3.2808399;
        let feetToMet = inputNum / 3.2808399;
        
        let litToGall = inputNum * 0.264172052;
        let gallToLit = inputNum / 0.264172052;
        
        let kiloToPound = inputNum * 2.20462262;
        let poundToKilo = inputNum / 2.20462262;
        
        render(inputEl.value, metToFeet, feetToMet, litToGall, gallToLit, kiloToPound, poundToKilo);
    } else {
        alert("Please add some numbers to convert 😊");     
    }      
})