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


function render(inputNum, foot, meter, gallon, liter, pound, kilo) {
    
    lengthOutputEl.textContent = `${inputNum} meters = ${foot.toFixed(3)} feet | ${inputNum} feet = ${meter.toFixed(3)} meters`;
    
    volumeOutputEl.textContent = `${inputNum} liters = ${gallon.toFixed(3)} gallons | ${inputNum} gallons = ${liter.toFixed(3)} liters`;
    
    massOutputEl.textContent = `${inputNum} kilos = ${pound.toFixed(3)} pounds | ${inputNum} pounds = ${kilo.toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", function() {
    let inputNum = Number(inputEl.value);
    
    if (!inputEl.value) {
        alert("Please, add numbers to convert!");
          
    } else if (isNaN(inputNum)) {
        alert("Sorry, only numbers are accepted. (For decimals use a point '.')");
        
    } else {
        
        let metToFeet = inputNum * 3.2808399;
        let feetToMet = inputNum / 3.2808399;
        
        let litToGall = inputNum * 0.264172052;
        let gallToLit = inputNum / 0.264172052;
        
        let kiloToPound = inputNum * 2.20462262;
        let poundToKilo = inputNum / 2.20462262;
        
        render(inputEl.value, metToFeet, feetToMet, litToGall, gallToLit, kiloToPound, poundToKilo) 
    }
})