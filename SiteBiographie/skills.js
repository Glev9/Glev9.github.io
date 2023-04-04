let highlighter=document.getElementById("toolHighlight");
let tool1=document.getElementById("tool1");
let tool2=document.getElementById("tool2");
let tool3=document.getElementById("tool3");

tool1.addEventListener("click",function(){changeTool(1); changeToLangs()});
tool2.addEventListener("click",function (){changeTool(2); changeToTools()});
tool3.addEventListener("click",function (){changeTool(3); changeToOther()});

function changeTool(tool){
    if(tool===1){
        tool1.style.color="white";
        highlighter.style.marginLeft="8rem";
        tool2.style.color="black";
        tool3.style.color="black";
    }
    if(tool===2){
        tool2.style.color="white";
        highlighter.style.marginLeft="27.5rem";
        tool1.style.color="black";
        tool3.style.color="black";
    }
    if(tool===3){
        tool3.style.color="white";
        highlighter.style.marginLeft="47rem";
        tool2.style.color="black";
        tool1.style.color="black";
    }
}


let grid=document.getElementById("itemGrid");
let langs=[
    "<img class='languages' alt='Java' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'\>",
    "<img class='languages' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' alt='python'/>",
    "<img class='languages' alt='C'  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' />",
    "<img class='languages' alt='Bash' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' />",
    "<img class='languages' alt='PHP' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' />",
    "<img class='languages' alt='C#' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' />",
    "<img class='languages' alt='Java' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />"
];

let tools=[
    "<img class='languages' alt=\"Unity\" src=\"https://store-speedtree-com.exactdn.com/site-assets/uploads/Unity-Logo-White.png?strip=all&lossy=1&quality=73&zoom=1&resize=1200%2C720&ssl=1\" />",
    "<img class='languages' alt=\"VS\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg\" />",
    "<img class='languages' alt=\"VSC\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg\" />",
    "<img class='languages' alt=\"Intellij\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg\" />",
    "<img class='languages' alt=\"PyCharm\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg\" />",
    "<img class='languages' alt=\"PHPstorm\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg\" />",
    "<img class='languages' alt=\"Git\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg\" />"
];

let other=[
    "<img class='languages' alt=\"HTML\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg\" />",
    "<img class='languages' alt=\"CSS\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg\" />",
    "<img class='languages' alt=\"mysql\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg\" /> ",
    "<img class='languages' alt=\"Oracle\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg\" />",
    "<img class='languages' alt=\"PostgreSQL\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg\" />",
    "<img class='languages' alt=\"Docker\" src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg\" />",
    "<img class='languages' alt=\"VMware\" src=\"https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg\" />",
    "<img class='languages' alt=\"VirtualBox\" src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png\" />",
];

function changeToLangs(){
    grid.innerHTML="";
    for(let i=0;i<langs.length;i++){
        grid.innerHTML+=langs[i];
    }
}

function changeToTools(){
    grid.innerHTML="";
    for(let i=0;i<tools.length;i++){
        grid.innerHTML+=tools[i];
    }
}

function changeToOther(){
    grid.innerHTML="";
    for(let i=0;i<other.length;i++){
        grid.innerHTML+=other[i];
    }
}