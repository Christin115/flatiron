// ===============================
// Trivia Game - CLI Version
// ===============================

// Trivia Questions Array
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    options: ["A. Madrid", "B. Paris", "C. Rome", "D. Berlin"],
    answer: "B"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["A. Python", "B. Java", "C. JavaScript", "D. C++"],
    answer: "C"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "A. Computer Style Sheets",
      "B. Cascading Style Sheets",
      "C. Colorful Style Sheets",
      "D. Creative Style System"
    ],
    answer: "B"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["A. Microsoft", "B. Apple", "C. Netscape", "D. Google"],
    answer: "C"
  }
];

// Import readline for CLI input
const readline = require("readline");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Game Variables
let score = 0;
let currentQuestionIndex = 0;
const totalTime = 60; // seconds
let timeRemaining = totalTime;

// ===============================
// Timer Function
// ===============================
let timer;

function startTimer() {

  timer = setInterval(() => {

    timeRemaining--;

    // Updates timer on the same line
    process.stdout.write(`\r⏰ Time Remaining: ${timeRemaining} seconds `);

    if (timeRemaining <= 0) {

      clearInterval(timer);

      console.log("\n\nTime is up!");

      endGame();
    }

  }, 1000);
}
// ===============================
// Start Game Function
// ===============================
function startGame() {
  console.log("=================================");
  console.log("🎮 Welcome to the Trivia Game!");
  console.log("=================================");
  console.log(`You have ${totalTime} seconds to finish.\n`);

  startTimer();
  askQuestion();
}

// ===============================
// Ask Questions Sequentially
// ===============================
function askQuestion() {

  // End if all questions answered
  if (currentQuestionIndex >= triviaQuestions.length) {
    endGame();
    return;
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  console.log(`\nQuestion ${currentQuestionIndex + 1}:`);
  console.log(currentQuestion.question);

  // Array iteration method: forEach()
  currentQuestion.options.forEach(option => {
    console.log(option);
  });

  rl.question("\nEnter your answer (A, B, C, or D): ", (userAnswer) => {

    validateAnswer(userAnswer.toUpperCase(), currentQuestion.answer);

    currentQuestionIndex++;

    askQuestion();
  });
}

// ===============================
// Validate User Answer
// ===============================
function validateAnswer(userAnswer, correctAnswer) {

  if (userAnswer === correctAnswer) {
    console.log("✅ Correct!");
    score++;
  } else {
    console.log(`❌ Incorrect! The correct answer was ${correctAnswer}.`);
  }
}

// ===============================
// End Game Function
// ===============================
function endGame() {

  clearInterval(timer);

  console.log("\n=================================");
  console.log("🏁 Game Over!");
  console.log(`Your final score is: ${score}/${triviaQuestions.length}`);
  // Array iteration method: map()
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
// Run the Game
// ===============================
startGame();