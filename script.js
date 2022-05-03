const h2 = document.createElement("h2");
h2.textContent = "Currently Working On...";
h2.style.fontSize = "14pt"
// Add h2 to body
document.querySelector("body").appendChild(h2)

////////// MENU BAR EVENTS /////////////////////////
const menuBar = document.querySelectorAll("li")
for (const item of menuBar) {
    item.addEventListener('mouseover', function(e) {
        console.log(e)
        item.style.backgroundColor = "black"
    }) 
    item.addEventListener('mouseout', function(e) {
        console.log(e)
        item.style.backgroundColor = "grey"
    }) 
}


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