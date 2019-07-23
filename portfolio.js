function removeConstructionAlert() {
    let state = alert = document.getElementById("constructionAlert").style.display;
    if (state == "block")
        document.getElementById("constructionAlert").style.display = "none";
        
    console.log(state);
}

function todoAlert() {
    let alert = document.getElementById("constructionAlert").style.display;
    if (alert == "none")
        document.getElementById("constructionAlert").style.display = "block";
}