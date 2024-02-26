let strikeButton = document.getElementById("strike");
let resetButton = document.getElementById("reset");

let scoreTeam1 = document.getElementById("score-team1");
let wicketsTeam1 = document.getElementById("wickets-team1");

let scoreTeam2 = document.getElementById("score-team2");
let wicketsTeam2 = document.getElementById("wickets-team2");

let team1Score = 0;
let team2Score = 0;
let team1Wickets = 0;
let team2Wickets = 0;

let turn = 1;
let team1BallsFaced = 0;
let team2BallsFaced = 0;

let possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];
const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");



function updateScore() {
    scoreTeam1.textContent = team1Score;
    scoreTeam2.textContent = team2Score;
    wicketsTeam1.textContent = team1Wickets;
    wicketsTeam2.textContent = team2Wickets;

}
function gameOver() {
    gameOverAudio.play();
    if (team1Score > team2Score) alert("Team one wins");
    if (team1Score < team2Score) alert("Team two wins");
    if (team1Score == team2Score) alert("Its a tie");

}
function resetGame() {
    window.location.reload();

}

resetButton.addEventListener("click", function () {
    resetGame()

})
function strikebutton() {
    strikeAudio.play();
    let randomElement = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]
    //second batting
    if (turn === 2) {
        //increase ball count
        team2BallsFaced++;
        //update score for the ball
        document.querySelector(
            `#team2-superover div:nth-child(${team2BallsFaced})`
        ).textContent = randomElement;
        // if wicket, update wickets variable
        if (randomElement === "W") {
            team2Wickets++;
        }
        // else update score
        else {
            team2Score += randomElement;
        }
        // Game over condition
        if (
            team2BallsFaced === 6 ||
            team2Wickets === 2 ||
            team2Score > team1Score
        ) {
            turn = 3;
            gameOver();
        }
    }

    if (turn === 1) {
        team1BallsFaced++;
        document.querySelector(
            `#team1-superover div:nth-child(${team1BallsFaced})`
        ).textContent = randomElement;
        if (randomElement === "W") {
            team1Wickets++;
        } else {
            team1Score += randomElement;
        }
        if (team1BallsFaced === 6 || team1Wickets === 2) turn = 2;
    }
    updateScore()
}
strikeButton.addEventListener("click",function(){
    strikebutton()
})




