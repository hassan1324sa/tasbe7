//def 
let count = document.querySelector(".count");
let button = document.querySelector(".button");


count.onclick = function () {
    count.innerHTML++;
}
button.onclick = function () {
    count.innerHTML = 0;
}
