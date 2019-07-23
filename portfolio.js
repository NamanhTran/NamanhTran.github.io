function removeConstructionAlert() {
    let state = document.getElementById("constructionAlert").hidden;
    if (state == false)
        document.getElementById("constructionAlert").hidden= true;
        
    console.log(state);
}

function todoAlert() {
    let alert = document.getElementById("constructionAlert").style.display;
    if (alert == "none")
        document.getElementById("constructionAlert").style.display = "block";
}