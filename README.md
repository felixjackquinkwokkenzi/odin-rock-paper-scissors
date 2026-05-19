# Odin Rock Paper Scissors

A fully functional, console-based implementation of the classic **Rock Paper Scissors** game. This project was developed as part of [The Odin Project's Foundations Curriculum](https://www.theodinproject.com/) to practice core JavaScript concepts.

[Live Demo](https://felixjackquinkwokkenzi.github.io/odin-rock-paper-scissors/)

## 🚀 About The Project

This game runs entirely inside the browser's developer console. The player competes against an automated computer opponent in a best-of-5 rounds match.

This project was a major milestone in mastering intermediate JavaScript concepts, specifically focusing on **functions, scope encapsulation, loop structures, and conditional logic**.

## 🎮 How to Play

1. Clone or download this repository to your local machine.
2. Open `index.html` in any web browser.
3. Open the **Browser Developer Tools** (Press `F12` or `Ctrl+Shift+I` on Windows, or `Cmd+Option+I` on Mac) and select the **Console** tab.
4. Refresh the page to trigger the game.
5. Follow the prompt windows to enter your choice (`rock`, `paper`, or `scissors`) for 5 rounds and check the console logs for the results!

## ✨ Key Features & Technical Details

- **Randomized Computer Opponent**: A robust random generator (`getComputerChoice`) dynamically returns either "rock", "paper", or "scissors" using the `Math.random` method.
- **Safe Input Handling**: The user choice handler (`getHumanChoice`) is case-insensitive (e.g., handles `RoCk` or `rock` smoothly) and is defensively programmed to return an empty string rather than crashing if the player presses "Cancel" in the prompt window.
- **Secure Scope Encapsulation**: Following clean code principles, the score variables (`humanScore`, `computerScore`) and the round mechanics (`playRound`) are encapsulated directly inside the main `playGame()` function. This prevents "global scope pollution" and ensures that scores are cleanly reset to `0` whenever a new game session is initiated.
- **Automated Game Loop**: Uses a standard JavaScript `for` loop to seamlessly orchestrate the five rounds of gameplay.

## 🛠️ Built With

- **HTML5**: To link the external script and load the web environment.
- **JavaScript (ES6+)**: Core logic, custom helper functions, closures, template literals, and input validation.

---

_This project was completed for the [Rock Paper Scissors assignment](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) in The Odin Project._
