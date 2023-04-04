let bio=document.getElementById("bio");
let hobbies=document.getElementById("hobbies");
let form=document.getElementById("formations");

bio.addEventListener("click",function(){
    document.getElementById("titleAbout").innerText="Biography";
    let text=document.getElementById("paragraphAbout");
    text.innerText="My name is Evan, and I was born in the town of Les Lilas, located in the Seine-Saint-Denis department in France. At 16 years old, I moved to Montpellier. \n" +
        "\n" +
        "                            In 2021, I obtained my baccalaureate with the specialties \"Mathematics\" and \"Computer Science\". This choice of specialties reflected my interest in mathematics and computer science, two fields that have always fascinated me. After obtaining my baccalaureate, I decided to pursue my studies in computer science. \n" +
        "\n" +
        "                            I joined a Bachelor's degree program in computer science specializing in the deployment of communicative and secure applications. This specialization matched my interests in cybersecurity and networks. I wanted to acquire skills in cybersecurity because I have been interested about this subject since I know hackers exist. \n" +
        "\n" +
        "                            During my studies, I had the opportunity to work on various projects in a team, which allowed me to develop my project management and communication skills. I also had the opportunity to participate in competitions and hackathons, where I could put my knowledge of cybersecurity and programming into practice. \n" +
        "\n" +
        "                            My professional goal is to become a cybersecurity engineer. To achieve this goal, I plan to continue my studies by joining an engineering school specializing in cybersecurity.";
});

hobbies.addEventListener("click",function(){
    document.getElementById("titleAbout").innerText="Hobbies";
    let text=document.getElementById("paragraphAbout");
    text.innerHTML= "<ul>" +
        "<li>Video Games\<br>\(expecially RPG)\</li>" +
        "<li>Mangas</li>" +
        "<li> Animation series </li>" +
        "<li>Astronomy</li> " +
        "<li>Hardware</li> </ul>";
});

form.addEventListener("click",function(){
    document.getElementById("titleAbout").innerText="Formations";
    let text=document.getElementById("paragraphAbout");
    text.innerText= "2021-2024 : BUT Computer Science \n ( Deployment of secured and communicating applications ) \n \n -IUT Montpellier-Sète" +
        "\n \n 2020-2021 : General Baccaulaureate (with honors) \n ( Mathematics and Computer Science ) \n \n - Cité scolaire Françoise Combes, Montpellier";
});