const quizData = [
  {
    question: 'What does phishing refer to in the context of financial fraud?',
    options: [
      'A. A secure method of transferring money online',
      'B. Fraudulent attempts to obtain sensitive information by pretending to be a trusted entity',
      'C. A type of bank transaction',
      'D. A legal way to share personal data',
    ],
    answer: 'B. Fraudulent attempts to obtain sensitive information by pretending to be a trusted entity',
  },
  {
    question: 'What is the safest way to use your credit card online?',
    options: [
      'A. Enter your details on any website',
      'B. Use a secure, encrypted website with "https://" in the URL',
      'C. Share your details over email if requested',
      'D. Avoid using credit cards online altogether',
    ],
    answer: 'B. Use a secure, encrypted website with "https://" in the URL',
  },
  {
    question: 'What does two-factor authentication (2FA) enhance?',
    options: [
      'A. Ease of accessing accounts',
      'B. Security by requiring a second form of verification',
      'C. Simplicity of password management',
      'D. Speed of logging into accounts',
    ],
    answer: 'B. Security by requiring a second form of verification',
  },
  {
    question: 'Which of the following is a common sign of identity theft?',
    options: [
      'A. Receiving promotional emails from a company',
      'B. Unfamiliar charges on your bank or credit card statement',
      'C. Receiving a new credit card you requested',
      'D. A sudden increase in your credit score',
    ],
    answer: 'B. Unfamiliar charges on your bank or credit card statement',
  },
  {
    question: 'If you receive an email from a bank asking for your account details, you should',
    options: [
      'A. Reply immediately to verify your account',
      'B. Click on the provided link to enter your information',
      'C. Avoid responding and contact your bank directly using official contact details',
      'D. Forward the email to your friends for their opinion',
    ],
    answer: 'C. Avoid responding and contact your bank directly using official contact details',
  },
{
    question: 'What does the concept of compound interest refer to?',
    options: [
      'A. Interest calculated on the initial principal only',
      'B. Interest calculated on the principal and previously accumulated interest',
      'C. Interest that decreases over time',
      'D. Interest paid only at the end of the investment term',
    ],
    answer: 'B. Interest calculated on the principal and previously accumulated interest',
  },
  {
    question: 'Which type of investment typically provides ownership in a company?',
    options: [
      'A. Bonds',
      'B. Mutual Funds',
      'C. Stocks',
      'D. ETFs',
    ],
    answer: 'C. Stocks',
  },
  {
    question: 'What does an ETF stand for?',
    options: [
      'A. Exchange-Traded Fund',
      'B. Equity Transfer Fund',
      'C. Earnings Transfer Facility',
      'D. Economic Trading Firm',
    ],
    answer: 'A. Exchange-Traded Fund',
  },
  {
    question: 'Which of the following describes a government bond?',
    options: [
      'A. A loan you give to the government in exchange for interest payments',
      'B. Ownership of a portion of a company',
      'C. A pool of investments managed by a professional',
      'D. A speculative stock purchase',
    ],
    answer: 'A. A loan you give to the government in exchange for interest payments',
  },
  {
    question: 'What is a mutual fund?',
    options: [
      'A. A single stock investment',
      'B. A collection of stocks and bonds managed by a professional',
      'C. A fixed deposit account',
      'D. An individual retirement account',
    ],
    answer: 'B. A collection of stocks and bonds managed by a professional',
  },
  {
    question: 'What is the primary benefit of diversification in investments?',
    options: [
      'A. It guarantees high returns',
      'B. It minimizes risk by spreading investments across different assets',
      'C. It ensures tax-free returns',
      'D. It allows you to own only one type of investment',
    ],
    answer: 'B. It minimizes risk by spreading investments across different assets',
  },
  {
    question: 'How is interest typically paid on a bond?',
    options: [
      'A. Annually or semi-annually',
      'B. Monthly',
      'C. Only at maturity',
      'D. Weekly',
    ],
    answer: 'A. Annually or semi-annually',
  },
  {
    question: 'What is the difference between a stock and a bond?',
    options: [
      'A. Stocks represent ownership; bonds represent debt',
      'B. Stocks are short-term investments; bonds are long-term investments',
      'C. Stocks provide fixed interest; bonds provide dividends',
      'D. There is no difference between the two',
    ],
    answer: 'A. Stocks represent ownership; bonds represent debt',
  },
  {
    question: 'What is the main advantage of investing in ETFs?',
    options: [
      'A. High management fees',
      'B. Diversification at a low cost',
      'C. Guaranteed returns',
      'D. Exclusive access to private companies',
    ],
    answer: 'B. Diversification at a low cost',
  },
  {
    question: 'What does the term “dividend” refer to in stock investments?',
    options: [
      'A. The profit earned from selling a stock',
      'B. A portion of a company’s earnings distributed to shareholders',
      'C. The initial cost of buying a stock',
      'D. The tax paid on stock earnings',
    ],
    answer: 'B. A portion of a company’s earnings distributed to shareholders',
  },
  {
    question: 'Which of the following investments is the safest?',
    options: [
      'A. Government bonds',
      'B. Individual stocks',
      'C. Mutual funds',
      'D. Cryptocurrencies',
    ],
    answer: 'A. Government bonds',
  },
  {
    question: 'What does the “time value of money” mean in financial planning?',
    options: [
      'A. Money loses value over time due to inflation',
      'B. Money available now is worth more than the same amount in the future',
      'C. Future money always has more value than present money',
      'D. Money has no value over time',
    ],
    answer: 'B. Money available now is worth more than the same amount in the future',
  },
  {
    question: 'What is the main goal of financial independence?',
    options: [
      'A. To rely on a single income source',
      'B. To achieve a lifestyle not dependent on active work for income',
      'C. To maximize debt for investments',
      'D. To avoid saving money',
    ],
    answer: 'B. To achieve a lifestyle not dependent on active work for income',
  },
  {
    question: 'What is dollar-cost averaging?',
    options: [
      'A. Investing a fixed amount of money at regular intervals',
      'B. Investing all your money in one stock',
      'C. Timing the market to buy low and sell high',
      'D. Avoiding investments with high costs',
    ],
    answer: 'A. Investing a fixed amount of money at regular intervals',
  },
  {
    question: 'Which factor primarily determines the growth of compound interest?',
    options: [
      'A. Inflation rate',
      'B. Interest rate and time',
      'C. The principal amount only',
      'D. The number of withdrawals made',
    ],
    answer: 'B. Interest rate and time',
  },
  {
    question: 'What is a key benefit of investing early?',
    options: [
      'A. Higher risk',
      'B. Lower tax obligations',
      'C. More time for compound interest to grow',
      'D. Immediate high returns',
    ],
    answer: 'C. More time for compound interest to grow',
  },
  {
    question: 'Which of the following is an example of a passive income source?',
    options: [
      'A. Wages from a full-time job',
      'B. Dividends from stock investments',
      'C. Freelance project payments',
      'D. Overtime pay',
    ],
    answer: 'B. Dividends from stock investments',
  },
  {
    question: 'What is the purpose of a target-date retirement fund?',
    options: [
      'A. To provide short-term investment opportunities',
      'B. To adjust asset allocation based on a specific retirement year',
      'C. To focus entirely on high-risk investments',
      'D. To eliminate the need for savings',
    ],
    answer: 'B. To adjust asset allocation based on a specific retirement year',
  },
  {
    question: 'What is the risk-return tradeoff?',
    options: [
      'A. Higher risk investments typically offer higher potential returns',
      'B. Lower risk investments always offer higher returns',
      'C. High returns require no risk',
      'D. Risk and return are unrelated',
    ],
    answer: 'A. Higher risk investments typically offer higher potential returns',
  },
  {
    question: 'What is an index fund?',
    options: [
      'A. A fund that actively selects stocks to beat the market',
      'B. A fund that matches the performance of a market index like the S&P 500',
      'C. A fund with no management fees',
      'D. A fund that invests only in government bonds',
    ],
    answer: 'B. A fund that matches the performance of a market index like the S&P 500',
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

  // Add event listeners to new options
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('mouseover', () => {
      option.style.backgroundColor = '#f0f0f0';
      option.style.transform = 'scale(1.02)';
      option.style.transition = 'all 0.2s ease';
    });
    
    option.addEventListener('mouseout', () => {
      option.style.backgroundColor = '';
      option.style.transform = 'scale(1)';
    });
  });
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

// Add visual feedback when selecting options
const options = document.querySelectorAll('.option');
options.forEach(option => {
  option.addEventListener('mouseover', () => {
    option.style.backgroundColor = '#f0f0f0';
    option.style.transform = 'scale(1.02)';
    option.style.transition = 'all 0.2s ease';
  });
  
  option.addEventListener('mouseout', () => {
    option.style.backgroundColor = '';
    option.style.transform = 'scale(1)';
  });
});

// Style the quiz container
const container = document.querySelector('.container');
container.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
container.style.border = '1px solid #e0e0e0';
container.style.padding = '32px';

// Style the heading
const heading = document.querySelector('h1');
heading.style.color = '#2c3e50';
heading.style.fontSize = '2.5em';
heading.style.marginBottom = '30px';
heading.style.borderBottom = '2px solid #428bca';
heading.style.paddingBottom = '10px';

// Style the buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.style.backgroundColor = '#2980b9';
  button.style.padding = '12px 28px';
  button.style.borderRadius = '25px';
  button.style.fontWeight = '500';
  button.style.letterSpacing = '0.5px';
  button.style.boxShadow = '0 4px 12px rgba(41,128,185,0.3)';
  
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#3498db';
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 6px 16px rgba(41,128,185,0.4)';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#2980b9';
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 12px rgba(41,128,185,0.3)';
  });
});

// Style the result container
resultContainer.style.padding = '20px';
resultContainer.style.marginTop = '20px';
resultContainer.style.borderRadius = '8px';
resultContainer.style.backgroundColor = '#f8f9fa';
resultContainer.style.border = '1px solid #dee2e6';
