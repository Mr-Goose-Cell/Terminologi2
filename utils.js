//
// CBT UTILITY LAYER
// Upgrade system untuk CBT FK UHO
//

// =======================
// SHUFFLE ARRAY (random soal)
// =======================
function shuffleArray(array) {
  let newArr = [...array];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

// =======================
// FILTER BY DIFFICULTY
// =======================
function getQuestionsByLevel(level) {
  if (level === "all") return questions;

  return questions.filter(q => q.level === level);
}

// =======================
// RESET PROGRESS TOTAL
// =======================
function clearProgress() {
  localStorage.removeItem("cbt_score");
  localStorage.removeItem("cbt_current");
}

// =======================
// FORMAT SCORE PERCENTAGE
// =======================
function getScorePercentage(score, total) {
  return Math.round((score / total) * 100);
}

// =======================
// GET GRADE SYSTEM (FK STYLE)
// =======================
function getGrade(percent) {
  if (percent >= 80) return "Sangat Baik 🔥";
  if (percent >= 60) return "Cukup 👍";
  return "Perlu Belajar Lagi 📚";
}
