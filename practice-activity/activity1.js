score=0;

function updateScore() {
    score +=1
    document.getElementById("score").innerHTML = "Score:" + score
}

function saveScore() {
    localStorage.setItem("score",score)
} 

function nextPage() {
    window.location="Activity_2.html"
}
