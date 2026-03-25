
if(localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html"; 
}


const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues"; 
const container = document.getElementById("issuesContainer");    //showing issue card on display
const issueCountEl = document.getElementById("issueCount");    //total isssue count


fetch(API)