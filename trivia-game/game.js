// Game Module

const readline = require("readline");

const triviaQuestions = require("./questions");

const startTimer = require("./timer");

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Game Variables
let score = 0;

let currentQuestionIndex = 0;

let gameOver = false;


// ===============================
// Validate Answer
// ===============================

function validateAnswer(userAnswer, correctAnswer) {

  if (userAnswer === correctAnswer) {

    console.log("✅ Correct!");

    score++;

  } else {

    console.log(
      `❌ Incorrect! The correct answer was ${correctAnswer}.`
    );
  }
}


// ===============================
// End Game
// ===============================

function endGame(timer) {

  gameOver = true;

  clearInterval(timer);

  console.log("\n=================================");
  console.log("🏁 Game Over!");
  console.log("=================================");

  console.log(
    `Your final score is: ${score}/${triviaQuestions.length}`
  );

  const percentage =
    (score / triviaQuestions.length) * 100;

  console.log(`Score Percentage: ${percentage}%`);

  if (percentage === 100) {

    console.log("🌟 Perfect Score!");

  } else if (percentage >= 70) {

    console.log("👍 Great job!");

  } else {

    console.log("📚 Keep practicing!");
  }

  rl.close();
}


// ===============================
// Ask Questions
// ===============================

function askQuestion(timerData) {

  if (
    currentQuestionIndex >= triviaQuestions.length
  ) {

    endGame(timerData.timer);

    return;
  }

  const currentQuestion =
    triviaQuestions[currentQuestionIndex];

  console.log(
    `\n⏰ Time Remaining: ${timerData.getTimeRemaining()} seconds`
  );

  console.log(
    `\nQuestion ${currentQuestionIndex + 1}:`
  );

  console.log(currentQuestion.question);

  // Array iteration method
  currentQuestion.options.forEach(option => {

    console.log(option);

  });

  rl.question(
    "\nEnter your answer (A, B, C, or D): ",
    (userAnswer) => {

      if (gameOver) {

        return;
      }

      const formattedAnswer =
        userAnswer.toUpperCase();

      // Input validation
      if (
        !["A", "B", "C", "D"].includes(
          formattedAnswer
        )
      ) {

        console.log(
          "❌ Invalid input. Please enter A, B, C, or D."
        );

        askQuestion(timerData);

        return;
      }

      validateAnswer(
        formattedAnswer,
        currentQuestion.answer
      );

      currentQuestionIndex++;

      askQuestion(timerData);
    }
  );
}


// ===============================
// Start Game
// ===============================

function startGame() {

  console.log("=================================");
  console.log("🎮 Welcome to the Trivia Game!");
  console.log("=================================");

  const timerData = startTimer(
    60,
    () => endGame(timerData.timer)
  );

  askQuestion(timerData);
}

module.exports = startGame;