////////// CONTENT///////////////


// HOME
const h2 = document.createElement("h2");
h2.textContent = "Currently Working On...";
h2.style.fontSize = "14pt"
// Add h2 to body
//document.querySelector("#content").appendChild(h2)
document.querySelector("#home-default").appendChild(h2)

//Skills & Tools
const h2Skills = document.createElement("h2");
h2Skills.textContent = "Skills and Current Tech Stack";
h2Skills.style.fontSize = "14pt"
// Add h2 to body
//document.querySelector("#content").appendChild(h2)
document.querySelector("#skills-content").appendChild(h2Skills)

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
    item.addEventListener('click', function () {
        console.log("click")
        item.className += " active"
        console.log("active")
        showContent()
        item.className = item.className.replace(" active", "")
        
    })
    //item.children.style.display = "none" //first hide all content

    //item.children.addEventListener('click', function (e) {

    //    console.log(e)
    //    item.children.style.display = "block"
    }

document.getElementById("home-button").click()



/*const mainMenu = document.createElement("ul")
mainMenu.style.listStyleType = "none"
mainMenu.style.margin = "0"
mainMenu.style.overflow = "hidden"
mainMenu.style.backgroundColor = "grey"

document.querySelector("body").appendChild(mainMenu)

const menuHome = document.createElement("li")
const menuSkills = document.createElement("li")

document.querySelector("ul").appendChild(menuHome)
document.querySelector("ul").appendChild(menuSkills)
document.querySelector("li").style.float = "left"
document.querySelector("li").style.margin = "0"
document.querySelector("li").style.paddingInlineEnd = "10px"
document.querySelector("li").style.borderRight = "1px black solid"


menuHome.className = "menu"
menuSkills.className = "menu"

menuHome.textContent = "Home"
menuSkills.textContent = "Skills & Tools"
menuHome.style.display
*/

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