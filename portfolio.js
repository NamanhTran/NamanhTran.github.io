function removeConstructionAlert() {
    let state = alert = document.getElementById("constructionAlert").style.display;
    if (state == "block")
        document.getElementById("constructionAlert").style.display = "none";
}

function todoAlert() {
    let alert = document.getElementById("constructionAlert").style.display;
    if (alert == "none")
        document.getElementById("constructionAlert").style.display = "block";
}