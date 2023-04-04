let phase=0;
let actualProject=1;
let div = document.getElementById("frameImg");
let fr = document.getElementById("frame");
let img = document.getElementById("proj");

let title=document.getElementById("textboxTitle");
let desc=document.getElementById("textboxDesc");

let titles= ["Tickets to ride (Europe)", "GNSSAFE (ActInSpace 2022-2023)", "Collapsing Eras (CGJ 2023)", "CompanyPoll (SAE semester 3 & 4)"];
let descs= ["Game that uses the idea of Tickets to Ride europe in Java, UI in JavaFx (2-5 players)", "Project launched for the ActInSpace business creation competition", "RTS game developped using Unity during the Code Game Jam 2023", "Client-Server vote application in Java \n using El-Gamal encryption system"];
let mores=["Student Project realized during the 2nd semester as part of SAEs, the rules are the same as the original game, win conditions are as follows : player who has owned the longest continuous path of routes wins the European Express Bonus card which is worth 10 points; Each Train Stations has not been built is worth 4 points; Adding the points of any completed Destination Tickets indicated at the top left corner of the card; Deducting points for each Destination Ticket that has not yet been completed by the end of the game. The player with the most points wins the game.",
"Winner project of ActInSpace Montpellier, this project aims to provide a certification of your position to avoid spoofing and its consequences especially for delivery systems like Uber eats. During ActInSpace worldwide finals, we shared our ideas to high placed people in CNES and french army and got a lot of feedbacks and a \"guaratee\" that the project is feasible. We are currently working on it to make this huge project a reality.",
"Project realized during the Code Game Jam 2023 (30 hours). The theme of this game jam was \"Master of time\" and we decided to make a RTS where you have a certain time in each maps to capture a maximum of ennemies and create an army or consume them to get more time in the zone. At the end, you fight the master of time with your army. We chose to make a small ennemy AI to make the game funnier and added a fog of war to always get the player afraid of what can happen next, \"will there be ennemies to capture or nothing ?\". Of course, you have the time left in the map displayed on the screen to make you choose what to do with less hesitation.",
"Project realized during the 3rd and 4th semester as part of SAEs. The goal of this project was to make a secured binary voting (choice 1 or choice 2) system for our client. To do so, we used a special version of the El-Gamal encryption system to encrypt the votes. Packets are send from the client to the server using SSL Sockets, then, the vote is encrypted and sent to the scrutineer who divided the private key in multiple parts and sent them to keyholders. The private key is never reassembled (Lagrange extrapolation). The users and encrypted passwords are stored in a MySql database. To have a maximum of portability, we used Docker to run the server, the scrutineer and the n keyholders. The interface is in JavaFx"]


let t1=document.createElement("p");
t1.id="textMore";


nextProject = () => {
    phase=0;
    showActualProject();
    actualProject++;
    if(actualProject>4){
        actualProject=1;
    }
    img.src = "assets/project"+actualProject+".png";
    img.id = "proj";
    desc.innerText=descs[actualProject-1];
    title.innerText=titles[actualProject-1];
}

prevProject = () => {
    phase=0;
    showActualProject();
    actualProject--;
    if(actualProject<1){
        actualProject=4;
    }
    img.src = "assets/project"+actualProject+".png";
    img.id = "proj";
    desc.innerText=descs[actualProject-1];
    title.innerText=titles[actualProject-1];
}

showActualProject = () => {
    div.innerHTML = "";
    div.appendChild(fr);
    div.appendChild(img);
}

moreInfo = () => {
    if(phase===0){
        div.innerHTML = "";
        phase=1;
        t1.innerText=mores[actualProject-1];
        div.appendChild(t1);
    }
    else{
        phase=0;
        showActualProject();
    }
}

document.getElementById("next").addEventListener("click", nextProject);

document.getElementById("prev").addEventListener("click", prevProject);

document.getElementById("more").addEventListener("click", moreInfo);