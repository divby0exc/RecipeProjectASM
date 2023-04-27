let decBtn = document.querySelector("#decrease");
let incBtn = document.querySelector("#increase");
let portions = document.querySelector("#portions");
let arr = ['#one','#two','#three','#four','#five','#six','#seven','#eight','#nine'];

let convPort = parseInt(portions.textContent);

incBtn.onclick = () => { convPort+=2; incIngredients(); }
decBtn.onclick = () => { 
    if(portions.textContent==2) {
    }else{ convPort-=2; decIngredients(); }}

function incIngredients() {
    for(let i = 0; i < arr.length; i++) {
        let baseValues = new Array(document.querySelector(arr[i]).textContent)/2;
        console.log(baseValues[i]);
        document.querySelector(arr[i]).textContent += baseValues[i];
    }
}

function decIngredients() {
    for(let i = 0; i < arr.length; i++) {
        document.querySelector(arr[i]).textContent -= baseValues[i];
    }
}