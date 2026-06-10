let quizData = shuffleArray(questions);
let currentQuestion = 0;
let score = 0;
let answered = false;

// =======================
// LOAD QUESTION
// =======================
function loadQuestion() {
  const q = quizData[currentQuestion];

  document.getElementById("questionText").innerText = q.question;

  document.getElementById("difficultyDisplay").innerText = "Level: " + q.level;

  document.getElementById("questionCounter").innerText =
    `Soal: ${currentQuestion + 1} / ${quizData.length}`;

  document.getElementById("scoreDisplay").innerText =
    `Skor: ${score}`;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  document.getElementById("feedbackBox").classList.add("hidden");
  document.getElementById("nextBtn").disabled = true;

  answered = false;

  q.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = option;

    div.addEventListener("click", () => selectAnswer(index, div));

    optionsContainer.appendChild(div);
  });

  updateProgress();
}

// =======================
// SELECT ANSWER
// =======================
function selectAnswer(selectedIndex, element) {
  if (answered) return;

  answered = true;

  const q = quizData[currentQuestion];
  const options = document.querySelectorAll(".option");

  const feedbackBox = document.getElementById("feedbackBox");
  const answerStatus = document.getElementById("answerStatus");
  const explanationText = document.getElementById("explanationText");

  options.forEach(opt => opt.style.pointerEvents = "none");

  if (selectedIndex === q.answer) {
    element.classList.add("correct");
    answerStatus.innerText = "✔ Jawaban Benar";
    score++;
  } else {
    element.classList.add("wrong");
    options[q.answer].classList.add("correct");
    answerStatus.innerText = "✘ Jawaban Salah";
  }

  explanationText.innerText = q.explanation;

  feedbackBox.classList.remove("hidden");

  document.getElementById("scoreDisplay").innerText = `Skor: ${score}`;

  document.getElementById("nextBtn").disabled = false;

  saveProgress();
}

// =======================
// NEXT QUESTION
// =======================
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= quizData.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

// =======================
// SHOW RESULT
// =======================
function showResult() {
  document.querySelector(".container").style.display = "none";

  const resultScreen = document.getElementById("resultScreen");
  resultScreen.classList.remove("hidden");

  document.getElementById("finalScore").innerText =
    `Skor kamu: ${score} / ${quizData.length}`;

  let levelText = "";

  const percent = (score / questions.length) * 100;

  if (percent >= 80) levelText = "Kategori: Sangat Baik 🔥";
  else if (percent >= 60) levelText = "Kategori: Cukup 👍";
  else levelText = "Kategori: Perlu Belajar Lagi 📚";

  document.getElementById("finalLevel").innerText = levelText;
}

// =======================
// RESTART QUIZ
// =======================
function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.querySelector(".container").style.display = "block";
  document.getElementById("resultScreen").classList.add("hidden");

  loadQuestion();
}

// =======================
// PROGRESS BAR
// =======================
function updateProgress() {
  const progress = (currentQuestion / quizData.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";
}

// =======================
// LOCAL STORAGE SAVE
// =======================
function saveProgress() {
  localStorage.setItem("cbt_score", score);
  localStorage.setItem("cbt_current", currentQuestion);
}

// =======================
// LOCAL STORAGE LOAD
// =======================
function loadProgress() {
  const savedScore = localStorage.getItem("cbt_score");
  const savedCurrent = localStorage.getItem("cbt_current");

  if (savedScore !== null) score = parseInt(savedScore);
  if (savedCurrent !== null) currentQuestion = parseInt(savedCurrent);
}

// =======================
// INIT
// =======================
loadProgress();
loadQuestion();
