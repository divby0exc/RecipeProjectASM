let decBtn = document.querySelector("#decrease");
let incBtn = document.querySelector("#increase");
let portions = document.querySelector("#portions");
let arr = ['#one','#two','#three','#four','#five','#six','#seven','#eight','#nine'];
let commentBtn = document.querySelector("#submit-comment");
let commentContent = document.querySelector("#comment");
let ulList = document.querySelector("#comment-section");


let convPort = parseFloat(portions.textContent);

incBtn.onclick = () => { portions.textContent=convPort+=2; incIngredients(); }
decBtn.onclick = () => { 
    if(convPort==2) {
    }else{ portions.textContent=convPort-=2; decIngredients(); }}

function incIngredients() {
    arr.forEach(e => {
        let num = parseFloat(document.querySelector(e).textContent);
        let newNum = num+=num;
        document.querySelector(e).textContent = newNum.toString();
    });
    }

function decIngredients() {
    for(let i = 0; i < arr.length; i++) {
        document.querySelector(arr[i]).textContent -= 
        document.querySelector(arr[i]).textContent;
    }
}
commentBtn.onclick = () => {
    let li = document.createElement("li");
    li.append(commentContent.value);
    commentContent.value = "";
    ulList.append(li);
}