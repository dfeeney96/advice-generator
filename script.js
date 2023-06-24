const button = document.querySelector("button");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2")

let id;
let advice;


async function getAdvice(){
    try{
        let response = await fetch("https://api.adviceslip.com/advice");
        let jsonData = await response.json();
        id = jsonData.slip.id;
        advice = jsonData.slip.advice;
        h1.innerText = `ADVICE ${id}`;
        h2.innerText = `"${advice}"`;
    } catch(err){
        console.log(`ERROR: ${err}`);
    }
}


button.addEventListener("click", getAdvice);
   