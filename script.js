const h2 = document.createElement("h2");
h2.textContent = "Summary";
// Add h2 to body
document.querySelector("body").appendChild(h2)

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
        // highlight the mouseover target
        console.log(event)
        logo.style.cursor = "pointer";})
}