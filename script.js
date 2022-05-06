////////// CONTENT///////////////

// HOME //////

// HEADING - CURRENTLY WORKING ON
const h2 = document.createElement("h2");
h2.textContent = "Currently Working On";
//h2.style.fontSize = "14pt"
// Add h2 to body
//document.querySelector("#content").appendChild(h2)
document.querySelector("#home-default").appendChild(h2)

// TEXT - CURRENTLY WORKING ON
const currentlyWorking = document.createElement("p")
currentlyWorking.textContent = "My background is mainly in analytics but this website represents my first journey into software development. I developed all site content and functionality using a combination of JavaScript, HTML, and CSS. I am currently working as Product Analyst at FreshBooks, focused on increasing conversion and improving product features for our users."
document.querySelector("#home-default").appendChild(currentlyWorking)
//document.querySelector("#home-default")

// HEADING - EXPERIENCES
const br = document.createElement("br")
const br2 = document.createElement("br")
const br3 = document.createElement("br")
const h2Experience = document.createElement("h2")
h2Experience.textContent = "Experience"
document.querySelector("#home-default").appendChild(h2Experience)

const h3 = document.createElement("h3")
h3.textContent = "Product Analyst, FreshBooks"
const h32 = document.createElement("h3")
h32.textContent = "Data Analyst - Supply Chain, Provincial Health Services Authority"
const h33 = document.createElement("h3")
h33.textContent = "Business Analyst, Provincial Health Services Authority"
document.querySelector("#home-default").appendChild(h3)
document.querySelector("#home-default").appendChild(br)
document.querySelector("#home-default").appendChild(h32)
document.querySelector("#home-default").appendChild(br2)
document.querySelector("#home-default").appendChild(h33)


// HEADING - SKILLS & TOOLS //////////
const h2Skills = document.createElement("h2");
h2Skills.textContent = "Skills and Current Tech Stack";
document.querySelector("#skills-content").appendChild(h2Skills)

const h3Skills = document.createElement("h3")
h3Skills.id = "skills"
h3Skills.textContent = "Skills"

const ulSkills = document.createElement("ul")
ulSkills.id = "skillList"
const liAB = document.createElement("li")
liAB.textContent = "A/B Testing"
const liFor = document.createElement("li")
liFor.textContent = "Time Series Forecasting"
const liStat = document.createElement("li")
liStat.textContent = "Statistical Modelling"
const liVis = document.createElement("li")
liVis.textContent = "Visualization"


const h3Languages = document.createElement("h3")
h3Languages.id = "languages"
h3Languages.textContent = "Languages"

const ulLanguages = document.createElement("ul")
ulLanguages.id = "languageList"
const liSQL = document.createElement("li")
liSQL.textContent = "SQL"
const liPython = document.createElement("li")
liPython.textContent = "Python"
const liR = document.createElement("li")
liR.textContent = "R"
const liJava = document.createElement("li")
liJava.textContent = "JavaScript"
const liLook = document.createElement("li")
liLook.textContent = "LookML"
const liGit = document.createElement("li")
liGit.textContent = "Git"


const h3Tools = document.createElement("h3")
h3Tools.id = "tools"
h3Tools.textContent = "Tools"
const ulTools = document.createElement("ul")
ulTools.id = "toolList"

const liBQ = document.createElement("li")
liBQ.textContent = "BigQuery, PostgreSQL, SQL Server"
const liLooker = document.createElement("li")
liLooker.textContent = "Looker"
const liPBI = document.createElement("li")
liPBI.textContent = "Power BI"
const liTab = document.createElement("li")
liTab.textContent = "Tableau"



document.querySelector("#skills-content").appendChild(h3Skills)
document.querySelector("#skills").appendChild(ulSkills)
document.querySelector("#skillList").appendChild(liAB)
document.querySelector("#skillList").appendChild(liFor)
document.querySelector("#skillList").appendChild(liStat)
document.querySelector("#skillList").appendChild(liVis)

document.querySelector("#skills-content").appendChild(h3Languages)
document.querySelector("#languages").appendChild(ulLanguages)
document.querySelector("#languageList").appendChild(liSQL)
document.querySelector("#languageList").appendChild(liPython)
document.querySelector("#languageList").appendChild(liR)
document.querySelector("#languageList").appendChild(liJava)
document.querySelector("#languageList").appendChild(liLook)
document.querySelector("#languageList").appendChild(liGit)

document.querySelector("#skills-content").appendChild(h3Tools)
document.querySelector("#tools").appendChild(ulTools)
document.querySelector("#toolList").appendChild(liBQ)
document.querySelector("#toolList").appendChild(liLooker)
document.querySelector("#toolList").appendChild(liPBI)
document.querySelector("#toolList").appendChild(liTab)

////////// MENU BAR EVENTS /////////////////////////
const menuBar = document.querySelectorAll(".tablinks")
for (const item of menuBar) {
    item.addEventListener('mouseover', function(e) {
        //console.log(e)
        item.style.backgroundColor = "salmon"
        item.style.cursor = "pointer"
    }) 
    item.addEventListener('mouseout', function(e) {
        //console.log(e)
        item.style.backgroundColor = "grey"
    }) 
}

function showContent() {
    let tabContent
    const tabLink = document.querySelector(".active")
    if (tabLink.id === "home-button") {
        tabContent = document.querySelector("#home-default")
    } 
    else if (tabLink.id === "skills-button") {
        tabContent = document.querySelector("#skills-content")
    }
    else {console.log("nothing")}
    tabContent.style.display = "block"
}
//Hide all content
const tabContent = document.getElementsByClassName("tab-content")
for (const item of tabContent) {
    item.style.display = "none"
}

//Show content if clicked
const tabLinks = document.getElementsByClassName("tablinks")
for (const item of tabLinks) {
    
    item.addEventListener('click', function (e) {
        console.log(e)
        item.classList.remove("active")
        if (e.target === document.querySelector("button#skills-button.tablinks")) {
            e.target.classList.add("active")
            let content = document.getElementById("skills-content")
            content.style.display = "block"
            let link = document.getElementById("skills-button")
            console.log(link.className)
            let other = document.getElementById("home-default")
            other.style.display = "none"
            const inactive = document.getElementById("home-button")
            inactive.classList.remove("active")
            const active = document.getElementsByClassName("active")
            active[0].style.background = "SlateGrey"
            link.addEventListener('mouseout', function() {
                active[0].style.backgroundColor = "SlateGrey"
              })
            inactive.style.backgroundColor = "grey"      
        }
        else if (e.target === document.querySelector("button#home-button.tablinks")) {
            e.target.classList.add("active")
            let content = document.getElementById("home-default")
            content.style.display = "block"
            let link = document.getElementById("home-button")
            let other = document.getElementById("skills-content")
            other.style.display = "none"
            const inactive = document.getElementById("skills-button")
            inactive.classList.remove("active")
            const active = document.getElementsByClassName("active")
            active[0].style.background = "SlateGrey"
            link.addEventListener('mouseout', function() {          
                active[0].style.backgroundColor = "SlateGrey"
              })
            inactive.style.backgroundColor = "grey"                

        }
        else {let content = document.getElementById("content")
            content.child.display = "none"
        }

    })
    }

document.getElementById("home-button").click()

/////////////////////// LOGO IMAGES AND LINKS//////////////////////////
//Clickable LinkedIn Logo
const logoLi = document.getElementById("linkedin")
function clickAlertLi() {
    alert("Going to LinkedIn")
}
logoLi.addEventListener('click', clickAlertLi)

//Clickable GitHub Logo
const logoGh = document.getElementById("octocat")
function clickAlertGh() {
    alert("Going to GitHub")
}
logoGh.addEventListener('click', clickAlertGh)

//LinkedIn Navigation
function navigateToLinkedIn() {
    open("https://linkedin.com/in/jeremy-moxey/")
}
logoLi.addEventListener('click', navigateToLinkedIn)

//GitHub Navigation
function navigateToGitHub() {
    open("https://github.com/jeremy-moxey/my-personal-website")
}
logoGh.addEventListener('click', navigateToGitHub)

//Pointer style cursor for linked images
const logoAll = document.querySelectorAll(".logo")
for (const logo of logoAll) {
    logo.addEventListener("mouseover", function(event) {
        // log event and change cursor to pointer
        console.log(event)
        logo.style.cursor = "pointer";})
}