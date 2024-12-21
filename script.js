const quizData = [
  {
    question: 'What does phishing refer to in the context of financial fraud?',
    options: [
      'A. A secure method of transferring money online',
      'B. Fraudulent attempts to obtain sensitive information by pretending to be a trusted entity',
      'C. A type of bank transaction',
      'D. A legal way to share personal data',
    ],
    answer: 'B',
  },
  {
    question: 'What is the safest way to use your credit card online?',
    options: [
      'A. Enter your details on any website',
      'B. Use a secure, encrypted website with "https://" in the URL',
      'C. Share your details over email if requested',
      'D. Avoid using credit cards online altogether',
    ],
    answer: 'B',
  },
  {
    question: 'What does two-factor authentication (2FA) enhance?',
    options: [
      'A. Ease of accessing accounts',
      'B. Security by requiring a second form of verification',
      'C. Simplicity of password management',
      'D. Speed of logging into accounts',
    ],
    answer: 'B',
  },
  {
    question: 'Which of the following is a common sign of identity theft?',
    options: [
      'A. Receiving promotional emails from a company',
      'B. Unfamiliar charges on your bank or credit card statement',
      'C. Receiving a new credit card you requested',
      'D. A sudden increase in your credit score',
    ],
    answer: 'B',
  },
  {
    question: 'If you receive an email from a bank asking for your account details, you should',
    options: [
      'A. Reply immediately to verify your account',
      'B. Click on the provided link to enter your information',
      'C. Avoid responding and contact your bank directly using official contact details',
      'D. Forward the email to your friends for their opinion',
    ],
    answer: 'C',
  },
  {
    question: 'What should you do if you suspect your identity has been stolen?',
    options: [
      'A. Wait and see if further issues arise',
      'B. Contact your bank or credit card company immediately and report the fraud',
      'C. Ignore it unless you lose money',
      'D. Change all your social media passwords',
    ],
    answer: 'B',
  },
  {
    question: 'Which of the following should you do to protect your personal information?',
    options: [
      'A. Share your passwords only with family members',
      'B. Use strong, unique passwords and avoid sharing sensitive information online',
      'C. Write down your passwords in a notebook',
      'D. Send sensitive details via unsecured email',
    ],
    answer: 'B',
  },
  {
    question: 'What is the main benefit of using a credit monitoring service?',
    options: [
      'A. It improves your credit score',
      'B. It helps detect fraudulent activity on your accounts early',
      'C. It automatically prevents fraud from happening',
      'D. It provides free credit reports for life',
    ],
    answer: 'B',
  },
  {
    question: 'Which is a reliable method to monitor your accounts for fraud?',
    options: [
      'A. Regularly review your account statements for unauthorized transactions',
      'B. Wait for your bank to alert you',
      'C. Only check your accounts once a year',
      'D. Rely on your credit card company to catch fraud',
    ],
    answer: 'A',
  },
  {
    question: 'Which of the following actions can help protect you from financial fraud?',
    options: [
      'A. Sharing your personal information on public forums',
      'B. Ignoring suspicious activity on your accounts',
      'C. Shredding sensitive documents before disposal and avoiding sharing private details',
      'D. Writing down your Social Security number for easy access',
    ],
    answer: 'C',
  },
  {
    question: 'What should you look for to ensure a website is secure for transactions?',
    options: [
      'A. A lock icon and "https://" in the website URL',
      'B. Brightly colored advertisements on the page',
      'C. A recommendation from a friend',
      'D. A non-functional website footer',
    ],
    answer: 'A',
  },
  {
    question: 'Why is it important to review your bank statements regularly?',
    options: [
      'A. To find opportunities for loans',
      'B. To detect unauthorized transactions or errors',
      'C. To calculate your monthly income',
      'D. To qualify for higher credit limits',
    ],
    answer: 'B',
  },
  {
    question: 'What is the primary purpose of an emergency fund?',
    options: [
      'A. To invest in stocks',
      'B. To cover unexpected expenses or financial emergencies',
      'C. To pay for luxury items',
      'D. To qualify for a mortgage',
    ],
    answer: 'B',
  },
  {
    question: 'How can you protect yourself from online financial fraud?',
    options: [
      'A. Share your banking information only through email',
      'B. Avoid clicking on links in unsolicited emails',
      'C. Use the same password for all your accounts',
      'D. Post your financial details on social media for backup',
    ],
    answer: 'B',
  },
  {
    question: 'What is the benefit of setting financial goals?',
    options: [
      'A. To track your spending habits and prioritize savings',
      'B. To eliminate the need for budgeting',
      'C. To spend money more freely',
      'D. To reduce your credit score',
    ],
    answer: 'A',
  },
  
  
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();