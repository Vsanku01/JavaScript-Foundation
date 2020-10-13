"use strict";
const team1 = document.getElementById("hit-1");
const team2 = document.getElementById("hit-2");
const tbody1 = document.querySelector("#team-1-players");
const tbody2 = document.querySelector("#team-2-players");
const generateResult = document.querySelector(".result");
const scoreCard = document.querySelector(".scoreCard");
const resultButton = document.querySelector(".result");
const gameTimer = 60;
// DOM Table
let html = "";
for (let i = 1; i <= 10; i++) {
    html += `
  <tr>
    <th scope="row" id="player-${i}">PLAYER ${i}</th>
    <td><span class="td-hid"></span></td>
    <td><span class="td-hid"></span></td>
    <td><span class="td-hid"></span></td>
    <td><span class="td-hid"></span></td>
    <td><span class="td-hid"></span></td>
    <td><span class="td-hid"></span></td>
    <td><span class="td-hid">TOT</span></td>
  </tr>
  `;
    tbody1.innerHTML = html;
    tbody2.innerHTML = html;
}
class Game {
    constructor() {
        this.possibleScores = [0, 1, 2, 3, 4, 6];
        this.randomIdx = 0;
        this.score = "";
        this.i = 1;
        this.j = 1;
        // Timer
        this.timePassed = 0;
        this.TIME_LIMIT = 60;
        this.timeLeft = this.TIME_LIMIT;
        this.timerInterval = 0;
        this.time = 0;
    }
    getRandom() {
        this.randomIdx = Math.floor(Math.random() * (5 - 0 + 1));
        this.score = this.possibleScores[this.randomIdx].toString();
    }
    playTeam1() {
        let flag = true;
        let Idx = -1;
        for (let i = 1; i <= 10; i++) {
            let scores = [];
            let j = 2;
            while (j <= 7) {
                let currentPlayer = document.querySelector(`#team-1-players > tr:nth-child(${i}) > td:nth-child(${j}) > span`);
                this.getRandom();
                if (+this.score > 0) {
                    currentPlayer.innerHTML = this.score;
                    scores.push(+this.score);
                }
                else if (+this.score === 0) {
                    currentPlayer.innerHTML = "0";
                    break;
                }
                j++;
            }
            // Sum
            let calSum = this.calcSum(scores);
            let total = document.querySelector(`#team-1-players > tr:nth-child(${i}) > td:nth-child(8) span`);
            total.innerHTML = calSum.toString();
        }
    }
    playTeam2() {
        let flag = true;
        let Idx = -1;
        for (let i = 1; i <= 10; i++) {
            let scores = [];
            let j = 2;
            while (j <= 7) {
                let currentPlayer = document.querySelector(`#team-2-players > tr:nth-child(${i}) > td:nth-child(${j}) > span`);
                this.getRandom();
                if (+this.score > 0) {
                    currentPlayer.innerHTML = this.score;
                    scores.push(+this.score);
                }
                else if (+this.score === 0) {
                    currentPlayer.innerHTML = "0";
                    break;
                }
                j++;
            }
            // Sum
            let calSum = this.calcSum(scores);
            let total = document.querySelector(`#team-2-players > tr:nth-child(${i}) > td:nth-child(8) span`);
            total.innerHTML = calSum.toString();
        }
    }
    calcSum(scores) {
        let sum = 0;
        scores.forEach((ele) => {
            sum += +ele;
        });
        return sum;
    }
    displayTeam1Score() {
        if (this.j < 9) {
            this.j += 1;
        }
        if (this.j === 9) {
            this.i += 1;
            this.j = 2;
        }
        let val = document.querySelector(`#team-1-players > tr:nth-child(${this.i}) > td:nth-child(${this.j}) > span`).innerHTML;
        if (val === "") {
            document
                .querySelector(`#team-1-players > tr:nth-child(${this.i}) > td:nth-child(8) span`)
                .classList.remove("td-hid");
            this.i += 1;
            this.j = 2;
        }
        document
            .querySelector(`#team-1-players > tr:nth-child(${this.i}) > td:nth-child(${this.j}) > span`)
            .classList.remove("td-hid");
    }
    displayTeam2Score() {
        if (this.j < 9) {
            this.j += 1;
        }
        if (this.j === 9) {
            this.i += 1;
            this.j = 2;
        }
        let val = document.querySelector(`#team-2-players > tr:nth-child(${this.i}) > td:nth-child(${this.j}) > span`).innerHTML;
        if (val === "") {
            document
                .querySelector(`#team-2-players > tr:nth-child(${this.i}) > td:nth-child(8) span`)
                .classList.remove("td-hid");
            this.i += 1;
            this.j = 2;
        }
        document
            .querySelector(`#team-2-players > tr:nth-child(${this.i}) > td:nth-child(${this.j}) > span`)
            .classList.remove("td-hid");
    }
    initiateGame() {
        game.playTeam1();
        game.playTeam2();
        resultButton.disabled = true;
        team1.addEventListener("click", () => {
            game.displayTeam1Score();
        });
        team2.addEventListener("click", () => {
            game.displayTeam2Score();
        });
        setInterval(() => {
            if (this.time <= gameTimer) {
                team1.disabled = false;
                team2.disabled = true;
                document.getElementById("timer").innerText = this.time.toString();
            }
            if (this.time === gameTimer) {
                this.i = 1;
                this.j = 1;
            }
            if (this.time > gameTimer && this.time <= gameTimer * 2) {
                team1.disabled = true;
                team2.disabled = false;
                document.getElementById("timer").innerText = (this.time - gameTimer).toString();
            }
            if (this.time > gameTimer * 2) {
                team1.disabled = true;
                team2.disabled = true;
                resultButton.disabled = false;
                document.getElementById("timer").innerText = "0";
                return;
            }
            this.time += 1;
        }, 1000);
        generateResult.addEventListener("click", () => {
            this.getResult();
        });
    }
    getResult() {
        var _a, _b;
        let team1Scores = [];
        let team1Final = 0;
        let team2Final = 0;
        let team2Scores = [];
        for (let i = 1; i <= 10; i++) {
            if (document
                .querySelector(`#team-1-players > tr:nth-child(${i}) > td:nth-child(8) span`)
                .classList.contains("td-hid") === false) {
                team1Scores.push((_a = document.querySelector(`#team-1-players > tr:nth-child(${i}) > td:nth-child(8) span`)) === null || _a === void 0 ? void 0 : _a.innerHTML);
            }
            if (document
                .querySelector(`#team-2-players > tr:nth-child(${i}) > td:nth-child(8) span`)
                .classList.contains("td-hid") === false) {
                team2Scores.push((_b = document.querySelector(`#team-2-players > tr:nth-child(${i}) > td:nth-child(8) span`)) === null || _b === void 0 ? void 0 : _b.innerHTML);
            }
        }
        team1Final = this.calcSum(team1Scores);
        team2Final = this.calcSum(team2Scores);
        document.getElementById("score-1").innerText = team1Final.toString();
        document.getElementById("score-2").innerText = team2Final.toString();
        let plNo = 0;
        let id = -1;
        let manOfTheMatchScore = 0;
        let matchWon = document.createElement("div");
        if (team1Final > team2Final) {
            matchWon.innerHTML = "MATCH WON BY <br> TEAM1 <hr>";
            let maxScore = this.findMax(team1Scores);
            plNo = team1Scores.indexOf(maxScore.toString());
            id = 1;
            manOfTheMatchScore = maxScore;
        }
        else {
            matchWon.innerHTML = "MATCH WON BY <br> TEAM2 <hr>";
            let maxScore = this.findMax(team2Scores);
            plNo = team2Scores.indexOf(maxScore.toString());
            id = 2;
            manOfTheMatchScore = maxScore;
        }
        scoreCard.append(matchWon);
        let manOfTheMatch = document.createElement("div");
        manOfTheMatch.innerHTML = `
      MAN OF THE MATCH <br>
      PLAYER-${plNo + 1}<br>
      TEAM-${id}<br>
      SCORE-${manOfTheMatchScore}
    `;
        scoreCard.append(manOfTheMatch);
    }
    findMax(scores) {
        let max = Number.MIN_VALUE;
        scores.forEach((score) => {
            if (+score > max) {
                max = score;
            }
        });
        return max;
    }
}
let game = new Game();
game.initiateGame();
