const totalEL = document.getElementById("total-counter");
const remEL =document.getElementById("rem-counter");

const textareaEl =document.getElementById("textarea");


textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
})
function updateCounter(){
    totalEL.innerText =textareaEl.value.length;
    remEL.innerText=  textareaEl.getAttribute("maxlength")-textareaEl.value.length;
    

}