const h2 = document.createElement("h2");
h2.textContent = "Summary";
// Add h2 to body
document.querySelector("body").appendChild(h2)

//Clickable LinkedIn Logo
const logo = document.getElementById("logo")
function clickAlert() {
    alert("Going to LinkedIn")
}
logo.addEventListener('click', clickAlert)
const linkedIn = "https://linkedin.com/in/jeremy-moxey/"

function navigate() {
    open("https://linkedin.com/in/jeremy-moxey/")
}
logo.addEventListener('click', navigate)

