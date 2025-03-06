let buttonVat = document.querySelector("#calcuate-vat");
let divVat = document.querySelector(".vat-calculation");

buttonVat.addEventListener("click", () => {
    let raw_price = document.querySelector("input").value;
    let final_price = raw_price * (18.5 / 100);
    let result = document.createElement("h2");
    result.textContent = `The final price is : ${final_price}`;
    divVat.append(result);
});

// ----------------------------------------------------------------

let buttonTable = document.querySelector("#calcuate-table");
let divTable = document.querySelector(".multiplication-table");

buttonTable.addEventListener("click", () => {
    let num = document.querySelector("input").value;
    for(let i = 0; i <= 10; i++){
        let h2 = document.createElement("h2");
        h2.textContent = `${num} * ${i} = ${num * i}`;
        divTable.append(h2);
        console.log(h2);
    }
});

// -------------------------------------------------------------------

let array = [3,11,7,2,9,10];

array.forEach((element)=>{
    console.log(element)
});

function sum(array){
    let s = 0;
    for(let i = 0; i < array.length; i++){
        s += array[i];
    }
    return s;
}

function average(array){
    return sum(array) / array.length;
}

function min(array){
    let min = array[0];
    for(let i = 0; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }
    return min;
}

function max(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}

console.log(`The sum of the array is: ${sum(array)}\n
The average of the array is: ${average(array)}\n
The min of the array is: ${min(array)} et le max est: ${max(array)}`);

// --------------------------------------------------------------------

let divTemp = document.querySelector(".temperature-coversion")
let buttonTemp = document.querySelector("#calcuate-temp");
buttonTemp.addEventListener("click", () => {
    let celsius = document.querySelector("input").value;
    let fahrenheit = celsius * 9 / 5 + 32;
    let h2 = document.createElement("h2");
    h2.textContent = `The temperature in Fahrenheit is: ${fahrenheit}`;
    divTemp.append(h2);
});

function convert(f){
    return Math.round((f - 32) / 9 * 5);
}

let yesButton = document.querySelector("#yes");

yesButton.addEventListener("click", () => {
    let input = document.createElement("input");
    input.placeholder = "Enter the temperature in Fahrenreit";
    input.type = "number";
    divTemp.append(input);
    document.querySelector("tempereture")
    let button = document.createElement("button");
    button.textContent = "Calculate";
    divTemp.append(button);
    button.addEventListener("click", () => {
        let conversion = convert(input.value);
        let h2 = document.createElement("h2");
        h2.textContent = `The temperature in Celsius is: ${conversion}`;
        divTemp.append(h2);
    }) 
});

// -----------------------------------------------------------------

let buttonStr = document.querySelector("#reverse-string");
let divStr = document.querySelector(".string-reversal")
buttonStr.addEventListener("click", () => {
    let string = document.querySelector("input").value;
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    let h2 = document.createElement("h2");
    h2.textContent = `The string reversed is: ${reversed}`;
    divStr.append(h2);
})

// ------------------------------------------------------------------


function countVowels(mot){
    const vowels = "aeiouAEIOU";
    return mot.split("").filter(char => vowels.includes(char)).length;
}

let buttonVow = document.querySelector("#search");
let divVow = document.querySelector(".vowel-counting");
buttonVow.addEventListener("click", () => {
    let mot = document.querySelector("#vowel").value;
    let num = countVowels(mot);
    let h2 = document.createElement("h2");
    h2.textContent = `${mot} has ${num} vowels`;
    divVow.append(h2);
});