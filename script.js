const quizData = [
  {
    question: 'What does phishing refer to in the context of financial fraud?',
    options: [
      'A secure method of transferring money online',
      'Fraudulent attempts to obtain sensitive information by pretending to be a trusted entity',
      'A type of bank transaction',
      'A legal way to share personal data',
    ],
    answer: 'Fraudulent attempts to obtain sensitive information by pretending to be a trusted entity',
  },
  {
    question: 'What is the safest way to use your credit card online?',
    options: [
      'Enter your details on any website',
      'Use a secure, encrypted website with "https://" in the URL',
      'Share your details over email if requested',
      'Avoid using credit cards online altogether',
    ],
    answer: 'Use a secure, encrypted website with "https://" in the URL',
  },
  {
    question: 'What does two-factor authentication (2FA) enhance?',
    options: [
      'Ease of accessing accounts',
      'Security by requiring a second form of verification',
      'Simplicity of password management',
      'Speed of logging into accounts',
    ],
    answer: 'Security by requiring a second form of verification',
  },
  {
    question: 'Which of the following is a common sign of identity theft?',
    options: [
      'Receiving promotional emails from a company',
      'Unfamiliar charges on your bank or credit card statement',
      'Receiving a new credit card you requested',
      'A sudden increase in your credit score',
    ],
    answer: 'Unfamiliar charges on your bank or credit card statement',
  },
  {
    question: 'If you receive an email from a bank asking for your account details, you should',
    options: [
      'Reply immediately to verify your account',
      'Click on the provided link to enter your information',
      'Avoid responding and contact your bank directly using official contact details',
      'Forward the email to your friends for their opinion',
    ],
    answer: 'Avoid responding and contact your bank directly using official contact details',
  },
{
    question: 'What does the concept of compound interest refer to?',
    options: [
      'Interest calculated on the initial principal only',
      'Interest calculated on the principal and previously accumulated interest',
      'Interest that decreases over time',
      'Interest paid only at the end of the investment term',
    ],
    answer: 'Interest calculated on the principal and previously accumulated interest',
  },
  {
    question: 'Which type of investment typically provides ownership in a company?',
    options: [
      'Bonds',
      'Mutual Funds',
      'Stocks',
      'ETFs',
    ],
    answer: 'Stocks',
  },
  {
    question: 'What does an ETF stand for?',
    options: [
      'Exchange-Traded Fund',
      'Equity Transfer Fund',
      'Earnings Transfer Facility',
      'Economic Trading Firm',
    ],
    answer: 'Exchange-Traded Fund',
  },
  {
    question: 'Which of the following describes a government bond?',
    options: [
      'A loan you give to the government in exchange for interest payments',
      'Ownership of a portion of a company',
      'A pool of investments managed by a professional',
      'A speculative stock purchase',
    ],
    answer: 'A loan you give to the government in exchange for interest payments',
  },
  {
    question: 'What is a mutual fund?',
    options: [
      'A single stock investment',
      'A collection of stocks and bonds managed by a professional',
      'A fixed deposit account',
      'An individual retirement account',
    ],
    answer: 'A collection of stocks and bonds managed by a professional',
  },
  {
    question: 'What is the primary benefit of diversification in investments?',
    options: [
      'It guarantees high returns',
      'It minimizes risk by spreading investments across different assets',
      'It ensures tax-free returns',
      'It allows you to own only one type of investment',
    ],
    answer: 'It minimizes risk by spreading investments across different assets',
  },
  {
    question: 'How is interest typically paid on a bond?',
    options: [
      'Annually or semi-annually',
      'Monthly',
      'Only at maturity',
      'Weekly',
    ],
    answer: 'Annually or semi-annually',
  },
  {
    question: 'What is the difference between a stock and a bond?',
    options: [
      'Stocks represent ownership; bonds represent debt',
      'Stocks are short-term investments; bonds are long-term investments',
      'Stocks provide fixed interest; bonds provide dividends',
      'There is no difference between the two',
    ],
    answer: 'Stocks represent ownership; bonds represent debt',
  },
  {
    question: 'What is the main advantage of investing in ETFs?',
    options: [
      'High management fees',
      'Diversification at a low cost',
      'Guaranteed returns',
      'Exclusive access to private companies',
    ],
    answer: 'Diversification at a low cost',
  },
  {
    question: 'What does the term “dividend” refer to in stock investments?',
    options: [
      'The profit earned from selling a stock',
      'A portion of a company’s earnings distributed to shareholders',
      'The initial cost of buying a stock',
      'The tax paid on stock earnings',
    ],
    answer: 'A portion of a company’s earnings distributed to shareholders',
  },
  {
    question: 'Which of the following investments is the safest?',
    options: [
      'Government bonds',
      'Individual stocks',
      'Mutual funds',
      'Cryptocurrencies',
    ],
    answer: 'Government bonds',
  },
  {
    question: 'What does the “time value of money” mean in financial planning?',
    options: [
      'Money loses value over time due to inflation',
      'Money available now is worth more than the same amount in the future',
      'Future money always has more value than present money',
      'Money has no value over time',
    ],
    answer: 'Money available now is worth more than the same amount in the future',
  },
  {
    question: 'What is the main goal of financial independence?',
    options: [
      'To rely on a single income source',
      'To achieve a lifestyle not dependent on active work for income',
      'To maximize debt for investments',
      'To avoid saving money',
    ],
    answer: 'To achieve a lifestyle not dependent on active work for income',
  },
  {
    question: 'What is dollar-cost averaging?',
    options: [
      'Investing a fixed amount of money at regular intervals',
      'Investing all your money in one stock',
      'Timing the market to buy low and sell high',
      'Avoiding investments with high costs',
    ],
    answer: 'Investing a fixed amount of money at regular intervals',
  },
  {
    question: 'Which factor primarily determines the growth of compound interest?',
    options: [
      'Inflation rate',
      'Interest rate and time',
      'The principal amount only',
      'The number of withdrawals made',
    ],
    answer: 'Interest rate and time',
  },
  {
    question: 'What is a key benefit of investing early?',
    options: [
      'Higher risk',
      'Lower tax obligations',
      'More time for compound interest to grow',
      'Immediate high returns',
    ],
    answer: 'More time for compound interest to grow',
  },
  {
    question: 'Which of the following is an example of a passive income source?',
    options: [
      'Wages from a full-time job',
      'Dividends from stock investments',
      'Freelance project payments',
      'Overtime pay',
    ],
    answer: 'Dividends from stock investments',
  },
  {
    question: 'What is the purpose of a target-date retirement fund?',
    options: [
      'To provide short-term investment opportunities',
      'To adjust asset allocation based on a specific retirement year',
      'To focus entirely on high-risk investments',
      'To eliminate the need for savings',
    ],
    answer: 'To adjust asset allocation based on a specific retirement year',
  },
  {
    question: 'What is the risk-return tradeoff?',
    options: [
      'Higher risk investments typically offer higher potential returns',
      'Lower risk investments always offer higher returns',
      'High returns require no risk',
      'Risk and return are unrelated',
    ],
    answer: 'Higher risk investments typically offer higher potential returns',
  },
  {
    question: 'What is an index fund?',
    options: [
      'A fund that actively selects stocks to beat the market',
      'A fund that matches the performance of a market index like the S&P 500',
      'A fund with no management fees',
      'A fund that invests only in government bonds',
    ],
    answer: 'A fund that matches the performance of a market index like the S&P 500',
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
    radio.value = shuffledOptions[i].replace(/^[A-D]\.\s/, '');

    const optionText = document.createTextNode(shuffledOptions[i].replace(/^[A-D]\.\s/, ''));

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
    const correctAnswer = quizData[currentQuestion].answer.replace(/^[A-D]\.\s/, '');
    if (answer === correctAnswer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: correctAnswer,
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
