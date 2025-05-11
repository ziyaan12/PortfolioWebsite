// Tabs Functionality
const tabLinks = document.querySelectorAll(".tab-link");
const tabs = document.querySelectorAll(".tab");

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    const targetTabId = link.getAttribute("data-tab");
    document.getElementById(targetTabId).classList.add("active");
  });
});

// Default Tab
document.getElementById("about").classList.add("active");

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Quizzes Data
const quizzes = {
  "computer-science": {
    title: "Computer Science Quiz",
    questions: [
      { question: "What is the Big-O of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: 1 },
      { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperTech Markdown Language", "HighText Machine Language", "None of the above"], answer: 0 },
      { question: "What is a recursive function?", options: ["A function that calls itself", "A function that loops indefinitely", "A function without parameters", "A function that executes in parallel"], answer: 0 },
      { question: "Which language is used for web styling?", options: ["Java", "C++", "CSS", "Python"], answer: 2 },
      { question: "What is the purpose of DNS?", options: ["To host a website", "To translate domain names into IP addresses", "To encrypt web traffic", "To connect a database"], answer: 1 },
      { question: "What is Git used for?", options: ["Database management", "Version control", "Web hosting", "Network monitoring"], answer: 1 },
      { question: "Which company developed Java?", options: ["Microsoft", "Sun Microsystems", "Google", "Apple"], answer: 1 },
      { question: "What is the main component of a CPU?", options: ["ALU", "RAM", "Hard Drive", "GPU"], answer: 0 },
      { question: "Which of the following is a database?", options: ["MySQL", "Bootstrap", "Django", "Vue"], answer: 0 },
      { question: "What is the full form of SQL?", options: ["Structured Query Language", "Sequential Query Language", "System Query Language", "None of the above"], answer: 0 },
    ],
  },
  "dentistry": {
    title: "Dentistry Quiz",
    questions: [
      { question: "What is the hardest substance in the human body?", options: ["Bone", "Dentin", "Enamel", "Cartilage"], answer: 2 },
      { question: "What does 'odontogenesis' refer to?", options: ["Tooth eruption", "Tooth development", "Tooth loss", "Tooth decay"], answer: 1 },
      { question: "What is the primary mineral found in enamel?", options: ["Calcium carbonate", "Hydroxyapatite", "Magnesium", "Collagen"], answer: 1 },
      { question: "What is the term for gum disease?", options: ["Gingivitis", "Halitosis", "Caries", "Erosion"], answer: 0 },
      { question: "What is the standard number of adult teeth?", options: ["20", "28", "32", "36"], answer: 2 },
      { question: "Which tooth is most prone to cavities?", options: ["Molar", "Canine", "Incisor", "Premolar"], answer: 0 },
      { question: "What is fluoride used for in dentistry?", options: ["Cleaning teeth", "Strengthening enamel", "Whitening teeth", "Filling cavities"], answer: 1 },
      { question: "Which tool is used to remove plaque?", options: ["Scaler", "Forceps", "Drill", "Mirror"], answer: 0 },
      { question: "What does 'malocclusion' mean?", options: ["Crooked teeth", "Tooth loss", "Enamel erosion", "Jaw pain"], answer: 0 },
      { question: "What causes cavities?", options: ["Sugars and bacteria", "Acidic foods", "Lack of calcium", "Genetics"], answer: 0 },
    ],
  },
  "biology": {
    title: "Biology Quiz",
    questions: [
      { question: "What is the basic unit of life?", options: ["Atom", "Cell", "Tissue", "Organ"], answer: 1 },
      { question: "What is DNA's primary function?", options: ["Store energy", "Transport proteins", "Store genetic information", "Protect the cell"], answer: 2 },
      { question: "Which organelle is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"], answer: 2 },
      { question: "What is the process of converting glucose to energy called?", options: ["Photosynthesis", "Respiration", "Glycolysis", "Metabolism"], answer: 1 },
      { question: "Which of these is a prokaryotic organism?", options: ["Fungi", "Plants", "Bacteria", "Animals"], answer: 2 },
      { question: "What are enzymes?", options: ["Lipids", "Catalysts", "Proteins", "Vitamins"], answer: 1 },
      { question: "What is the pH of neutral substances?", options: ["0", "7", "14", "4"], answer: 1 },
      { question: "What is the function of red blood cells?", options: ["Transport oxygen", "Fight infections", "Carry nutrients", "Regulate temperature"], answer: 0 },
      { question: "What is a group of cells with the same function called?", options: ["Organ", "Tissue", "System", "Nucleus"], answer: 1 },
      { question: "What is the role of ribosomes?", options: ["Produce energy", "Synthesize proteins", "Break down waste", "Store genetic material"], answer: 1 },
    ],
  },
  "medicine": {
    title: "Medicine Quiz",
    questions: [
      { question: "What is the normal body temperature in Celsius?", options: ["35°C", "37°C", "39°C", "41°C"], answer: 1 },
      { question: "What does 'BP' stand for?", options: ["Body Pressure", "Blood Pressure", "Brain Pulse", "Body Pulse"], answer: 1 },
      { question: "What organ does Hepatitis affect?", options: ["Heart", "Liver", "Lungs", "Kidneys"], answer: 1 },
      { question: "What is a common treatment for bacterial infections?", options: ["Antivirals", "Antibiotics", "Vaccines", "Antifungals"], answer: 1 },
      { question: "What does 'CPR' stand for?", options: ["Cardiopulmonary Resuscitation", "Cardiac Pulse Regulation", "Critical Patient Rescue", "None of the above"], answer: 0 },
      { question: "Which is the largest organ in the human body?", options: ["Liver", "Lungs", "Skin", "Brain"], answer: 2 },
      { question: "What is an ECG used to measure?", options: ["Brain activity", "Blood flow", "Heart activity", "Lung capacity"], answer: 2 },
      { question: "What is insulin used for?", options: ["Treating diabetes", "Regulating blood pressure", "Improving digestion", "Preventing infections"], answer: 0 },
      { question: "What is the medical term for red blood cells?", options: ["Leukocytes", "Erythrocytes", "Thrombocytes", "Platelets"], answer: 1 },
      { question: "What does MRI stand for?", options: ["Magnetic Resonance Imaging", "Medical Radiographic Imaging", "Minimal Radiology Inspection", "Magnet Radiology Interaction"], answer: 0 },
    ],
  },
  "physics": {
    title: "Physics Quiz",
    questions: [
      { question: "What is the speed of light?", options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^9 m/s", "3x10^7 m/s"], answer: 0 },
      { question: "Who formulated the theory of relativity?", options: ["Newton", "Einstein", "Bohr", "Tesla"], answer: 1 },
      { question: "What is the unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], answer: 2 },
      { question: "What does E=mc^2 represent?", options: ["Energy-mass equivalence", "Energy transfer", "Electron charge", "Magnetic flux"], answer: 0 },
      { question: "What is absolute zero in Celsius?", options: ["-273°C", "-100°C", "-50°C", "-200°C"], answer: 0 },
      { question: "What is the primary force responsible for tides?", options: ["Gravity", "Magnetism", "Centrifugal", "Electromagnetic"], answer: 0 },
      { question: "Which particle has no charge?", options: ["Proton", "Electron", "Neutron", "Photon"], answer: 2 },
      { question: "What is the SI unit of power?", options: ["Watt", "Joule", "Newton", "Pascal"], answer: 0 },
      { question: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s^2", "10 m/s^2", "8.9 m/s^2", "9.9 m/s^2"], answer: 0 },
      { question: "What is the unit of frequency?", options: ["Hertz", "Newton", "Pascal", "Joule"], answer: 0 },
    ],
  },
  "maths": {
    title: "Maths Quiz",
    questions: [
      { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: 1 },
      { question: "What is the value of pi (approx)?", options: ["3", "3.14", "3.5", "4"], answer: 1 },
      { question: "What is 10% of 200?", options: ["20", "30", "40", "50"], answer: 0 },
      { question: "Solve: 5 + 3 * 2", options: ["16", "11", "13", "10"], answer: 1 },
      { question: "What is the formula for the area of a circle?", options: ["2πr", "πr^2", "πd^2", "2πr^2"], answer: 1 },
      { question: "What is 7 factorial (7!)?", options: ["5040", "4030", "7020", "504"], answer: 0 },
      { question: "What is the Pythagorean theorem?", options: ["a^2 + b^2 = c^2", "a^2 - b^2 = c^2", "a/b = c", "a*b = c^2"], answer: 0 },
      { question: "What is the reciprocal of 5?", options: ["5", "1/5", "10", "0"], answer: 1 },
      { question: "What is 2^5?", options: ["10", "16", "32", "64"], answer: 2 },
      { question: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "x^3"], answer: 1 },
    ],
  },
  "english": {
    title: "English Quiz",
    questions: [
      { question: "What is a synonym for 'happy'?", options: ["Sad", "Angry", "Joyful", "Tired"], answer: 2 },
      { question: "What is the antonym of 'big'?", options: ["Small", "Tall", "Wide", "Heavy"], answer: 0 },
      { question: "What is the past tense of 'go'?", options: ["Go", "Goes", "Gone", "Went"], answer: 3 },
      { question: "Which of these is a noun?", options: ["Quick", "Table", "Run", "Nicely"], answer: 1 },
      { question: "What is the plural form of 'child'?", options: ["Child", "Childrens", "Childs", "Children"], answer: 3 },
      { question: "What is a metaphor?", options: ["A comparison without 'like' or 'as'", "A type of poem", "A short story", "A type of verb"], answer: 0 },
      { question: "What is the opposite of 'give'?", options: ["Take", "Keep", "Send", "Get"], answer: 0 },
      { question: "What is a synonym for 'fast'?", options: ["Slow", "Quick", "Loud", "Bright"], answer: 1 },
      { question: "What is a verb?", options: ["A word that describes an action", "A person or place", "An adjective", "A word describing time"], answer: 0 },
      { question: "Which of these is a pronoun?", options: ["He", "Run", "Happy", "Quickly"], answer: 0 },
    ],
  },
};

// DOM Elements for Quiz Interaction
const quizContainer = document.getElementById("quiz-container");
const quizForm = document.getElementById("quiz-form");
const quizTitle = document.getElementById("quiz-title");
const submitButton = document.getElementById("submit-quiz");
const quizResult = document.getElementById("quiz-result");

// Topic Buttons Event Listener
document.querySelectorAll(".quiz-topic").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.getAttribute("data-topic");
    const quiz = quizzes[topic];
    if (quiz) {
      renderQuiz(quiz); // Call to Render the Selected Quiz
    }
  });
});

// Render Quiz
function renderQuiz(quiz) {
  quizTitle.textContent = quiz.title;
  quizForm.innerHTML = ""; // Clear Previous Quiz

  quiz.questions.forEach((q, i) => {
    const questionHTML = `
      <div class="quiz-question">
        <p>${i + 1}. ${q.question}</p>
        ${q.options
          .map(
            (option, j) =>
              `<label><input type="radio" name="q${i}" value="${j}"> ${option}</label><br>`
          )
          .join("")}
      </div>`;
    quizForm.innerHTML += questionHTML;
  });

  quizContainer.classList.remove("hidden");
  submitButton.classList.remove("hidden");
  quizResult.classList.add("hidden");
}

// Grade Quiz
submitButton.addEventListener("click", () => {
  const quizQuestions = document.querySelectorAll(".quiz-question");
  let score = 0;

  quizQuestions.forEach((question, i) => {
    const userAnswer = quizForm.querySelector(`input[name="q${i}"]:checked`);
    if (userAnswer && parseInt(userAnswer.value) === quizzes[quizTitle.textContent.toLowerCase().replace(" quiz", "")].questions[i].answer) {
      score++;
    }
  });

  // Determine Feedback Message
  let feedback;
  if (score === 10) {
    feedback = "Outstanding! You got a perfect score!";
  } else if (score >= 8) {
    feedback = "Great job! You scored very well!";
  } else if (score >= 5) {
    feedback = "Good effort! Keep practicing!";
  } else {
    feedback = "Don't worry! Try again to improve your score.";
  }

  quizResult.textContent = `You scored ${score} out of 10! ${feedback}`;
  quizResult.classList.remove("hidden");
  submitButton.classList.add("hidden");
});
