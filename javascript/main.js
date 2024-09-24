document.getElementById("donate-now-btn")
    .addEventListener("click", function(event){
        event.preventDefault();
        console.log("Donate now button clicked");
        window.location.href = "index.html";
    });

document.getElementById("history-btn")
    .addEventListener("click", function(event){
        event.preventDefault();
        console.log("History button clicked");
        window.location.href = "history.html";
    });