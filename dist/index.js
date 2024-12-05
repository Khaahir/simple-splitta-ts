"use strict";
let tip;
let sum;
let numberOfFriends;
let total;
let friendSum;
let sumDivided;
let calculatedTip;
let inputSum = document.getElementById("summa");
let inputFriends = document.getElementById("friends");
let inputTip = document.getElementById("tip");
let countBtn = document.getElementById("count-btn");
let displaytotal = document.getElementById("total-sum");
countBtn === null || countBtn === void 0 ? void 0 : countBtn.addEventListener("click", () => {
    tip = parseFloat(inputTip.value);
    sum = parseFloat(inputSum.value);
    friendSum = parseFloat(inputFriends.value);
    total = sum / friendSum;
    calculatedTip = total * (parseFloat(inputTip.value) / 100);
    if (!tip) {
        displaytotal.innerText = `${total}`;
    }
    else {
        displaytotal.innerText = `${total + calculatedTip}`;
    }
});
