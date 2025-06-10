const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheet", "Colorful Style Sheet"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyper Text Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborghinis"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  }
];

let current = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = quizData[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => {
      if (option === q.answer) {
        feedbackEl.textContent = "✅ Correct!";
        feedbackEl.style.color = "green";
      } else {
        feedbackEl.textContent = `❌ Wrong! Correct Answer: ${q.answer}`;
        feedbackEl.style.color = "red";
      }
    };
    optionsEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    feedbackEl.textContent = "";
  }
});

window.onload = loadQuestion;
