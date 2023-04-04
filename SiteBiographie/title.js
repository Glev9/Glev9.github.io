let balise = document.querySelector(".sideFade");
let tab= balise.textContent.split(" ");
balise.innerHTML = "";
for (let i=0;i <tab.length;i++){
    let text = tab[i].split("");
    for (let j = 0; j < text.length; j++) {
        balise.innerHTML += "<span class='side'>" + text[j] + "</span>";
    }
    balise.innerHTML+="<br>"
}


let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = document.querySelectorAll(".side")[char];
    span.classList.add("fade");
    char++;
    if (char === document.querySelectorAll(".side").length) {
        complete();
    }
}

function complete() {
    clearInterval(timer);
    timer = setInterval(onTick2, 50);

}

let h2 = document.querySelector(".slideFromBottom");
let h2Text = h2.textContent;
h2.innerHTML = "";
for (let i = 0; i < h2Text.length; i++) {
    h2.innerHTML += "<span class='bot'>" + h2Text[i] + "</span>";
    if(h2Text[i]===" "){
        h2.innerHTML+=" "
    }
}

let char2 = 0;

function onTick2() {
    const span = document.querySelectorAll(".bot")[char2];
    span.classList.add("fade");
    char2++;
    if (char2 === document.querySelectorAll(".bot").length) {
        complete2();
    }
}

function complete2() {
    clearInterval(timer);
    timer = null;
}