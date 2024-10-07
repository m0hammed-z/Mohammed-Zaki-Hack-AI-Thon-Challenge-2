// script.js

// Function to reveal hidden information
function revealInfo(infoId) {
    const info = document.getElementById(infoId);
    if (info) {
        info.classList.toggle('hidden-info');
    }
}
