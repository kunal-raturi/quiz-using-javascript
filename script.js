const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questionItems = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

form.addEventListener("submit", (e) => {
  questionItems.forEach((questionItem) => {
    questionItem.classList.remove("incorrect"); // Remove incorrect class
    questionItem.classList.remove("correct"); // Remove correct class
  });

  e.preventDefault();

  const checkedAnswers = answers.filter((answer) => answer.checked); // Fix the typo here (change 'answer' to 'answers')

  checkedAnswers.forEach((answer) => {
    const isCorrect = answer.value === "true";
    const questionItem = answer.closest(".question-item");

    if (isCorrect) {
      questionItem.classList.add("correct"); // Add the 'correct' class
    } else {
      questionItem.classList.add("incorrect"); // Add the 'incorrect' class
    }
  });

  const allTrue = checkedAnswers.every((answer) => answer.value === "true");
  const allAnswered = checkedAnswers.length === questionItems.length;

  if (allTrue && allAnswered) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
    }, 1000);
  }
});
