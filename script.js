const questions = [
  "Tell me about yourself",
  "What are your strengths and weaknesses?",
  "Why should we hire you?",
  "Explain a challenging situation you faced",
  "Where do you see yourself in 5 years?"
];

function startInterview() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const selectedQuestion = questions[randomIndex];

  document.getElementById("question").innerText = selectedQuestion;
}
function nextQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const selectedQuestion = questions[randomIndex];

  document.getElementById("question").innerText = selectedQuestion;
}
