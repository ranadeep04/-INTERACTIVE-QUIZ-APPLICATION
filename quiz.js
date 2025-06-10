const quizData = {
    general: [
      { question: "What is the capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
      { question: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Venus"], answer: "Mars" }
    ],
    technology: [
      { question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperloop Text"], answer: "Hyper Text Markup Language" },
      { question: "What is CSS used for?", options: ["Styling", "Scripting", "Logic"], answer: "Styling" }
    ],
    sports: [
      { question: "Which country won the 2022 FIFA World Cup?", options: ["Argentina", "France", "Brazil"], answer: "Argentina" },
      { question: "How many players in a football team?", options: ["11", "9", "7"], answer: "11" }
    ],
    transport: [
      { question: "Which vehicle runs on rails?", options: ["Car", "Train", "Bus"], answer: "Train" },
      { question: "Which fuel is used in airplanes?", options: ["Diesel", "Jet fuel", "Petrol"], answer: "Jet fuel" }
    ],
    others: [
      { question: "What color do you get when you mix red and blue?", options: ["Purple", "Orange", "Green"], answer: "Purple" },
      { question: "Which season comes after summer?", options: ["Winter", "Spring", "Autumn"], answer: "Autumn" }
    ]
  };
  
  let currentCategory = "";
  let currentQuestion = 0;
  let score = 0;
  let feedbackList = [];
  
  function startQuiz(category) {
    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    feedbackList = [];
  
    document.querySelector('.category-section').style.display = "none";
    document.getElementById('quizContainer').style.display = "block";
  
    showQuestion();
  }
  
  function showQuestion() {
    const quiz = quizData[currentCategory];
    if (currentQuestion >= quiz.length) {
      showResult();
      return;
    }
  
    document.getElementById('questionBox').innerText = quiz[currentQuestion].question;
    const optionsBox = document.getElementById('optionsBox');
    optionsBox.innerHTML = "";
  
    quiz[currentQuestion].options.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.onclick = () => checkAnswer(option);
      optionsBox.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const quiz = quizData[currentCategory];
    const correct = quiz[currentQuestion].answer;
  
    if (selected === correct) {
      score++;
      feedbackList.push(`<p class='correct'>Q${currentQuestion+1}: Correct</p>`);
    } else {
      feedbackList.push(`<p class='wrong'>Q${currentQuestion+1}: Wrong (Correct: ${correct})</p>`);
    }
  
    currentQuestion++;
    showQuestion();
  }
  
  function showResult() {
    document.getElementById('quizContainer').style.display = "none";
    document.getElementById('resultSection').style.display = "block";
  
    document.getElementById('score').innerText = `Your Score: ${score}/${quizData[currentCategory].length}`;
    document.getElementById('feedback').innerHTML = feedbackList.join("");
  }
  