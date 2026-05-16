
// Timer Module

function startTimer(timeRemaining, endGame) {

  const timer = setInterval(() => {

    timeRemaining--;

    if (timeRemaining <= 0) {

      clearInterval(timer);

      console.log("\n⏰ Time is up!");

      endGame();
    }

  }, 1000);

  return {
    timer,
    getTimeRemaining: () => timeRemaining
  };
}

module.exports = startTimer;