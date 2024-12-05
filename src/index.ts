
let tip: number;
let sum: number;
let numberOfFriends: number;
let total: number;
let friendSum: number;
let sumDivided: number;
let calculatedTip: number;
 let inputSum = document.getElementById("summa") as HTMLInputElement
 let inputFriends = document.getElementById("friends") as HTMLInputElement
 let inputTip = document.getElementById("tip") as HTMLInputElement
 let countBtn =document.getElementById("count-btn") as HTMLButtonElement
let displaytotal = document.getElementById("total-sum") as HTMLBodyElement
countBtn?.addEventListener("click",()=>{
    tip  = parseFloat(inputTip.value)
    sum = parseFloat(inputSum.value)
    friendSum = parseFloat(inputFriends.value)
    total = sum / friendSum
    calculatedTip = total * (parseFloat(inputTip.value)/100)
 if( !tip){
    displaytotal.innerText = `${total}`
 }else{
    displaytotal.innerText = `${total + calculatedTip}`
 }


})