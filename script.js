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
  {
    question: 'What is an emergency fund used for?',
    options: [
      'Investing in high-risk assets',
      'Covering unexpected expenses like medical bills or job loss',
      'Paying regular monthly subscriptions',
      'Buying luxury items',
    ],
    answer: 'Covering unexpected expenses like medical bills or job loss',
  },
  {
    question: 'What does APR stand for and why is it important?',
    options: [
      'Annual Percentage Rate — it shows the yearly cost of borrowing including fees',
      'Applied Payment Rate — it is used to calculate salaries',
      'Annual Payment Return — it measures investment returns',
      'Authorized Purchase Rate — used for merchant payments',
    ],
    answer: 'Annual Percentage Rate — it shows the yearly cost of borrowing including fees',
  },
  {
    question: 'Which account type typically offers tax-free growth for qualified education expenses in Canada?',
    options: [
      'Registered Education Savings Plan (RESP)',
      'Tax-Free Savings Account (TFSA)',
      'Registered Retirement Savings Plan (RRSP)',
      'High-interest savings account',
    ],
    answer: 'Registered Education Savings Plan (RESP)',
  },
  {
    question: 'What is inflation?',
    options: [
      'An increase in the general price level of goods and services over time',
      'A sudden drop in stock prices',
      'A measure of unemployment',
      'A type of tax applied to goods',
    ],
    answer: 'An increase in the general price level of goods and services over time',
  },
  {
    question: 'What is the benefit of a TFSA (Tax-Free Savings Account)?',
    options: [
      'Contributions are tax-deductible',
      'Withdrawals are tax-free and growth is not taxed',
      'It guarantees positive returns',
      'Only available to corporations',
    ],
    answer: 'Withdrawals are tax-free and growth is not taxed',
  },
  {
    question: 'What does liquidity mean in finance?',
    options: [
      'How easily an asset can be converted to cash without significant loss',
      'The total profit of an investment',
      'The number of shares outstanding',
      'The interest rate paid on a loan',
    ],
    answer: 'How easily an asset can be converted to cash without significant loss',
  },
  {
    question: 'What is a budget surplus?',
    options: [
      'When expenses exceed income',
      'When income exceeds expenses',
      'When two budgets are combined',
      'A tax applied to budgets',
    ],
    answer: 'When income exceeds expenses',
  },
  {
    question: 'Which of the following is a common retirement savings vehicle in Canada?',
    options: [
      'RESP',
      'RRSP (Registered Retirement Savings Plan)',
      'GST credit',
      'HST rebate',
    ],
    answer: 'RRSP (Registered Retirement Savings Plan)',
  },
  {
    question: 'What is the main purpose of insurance?',
    options: [
      'To eliminate all financial risk',
      'To transfer risk and provide financial protection against specified losses',
      'To guarantee investment returns',
      'To increase tax obligations',
    ],
    answer: 'To transfer risk and provide financial protection against specified losses',
  },
];
let activeQuestions = [...quizData];


const quizContainer = document.getElementById('quiz');
const flashcardContainer = document.getElementById('flashcard');
const rapidInfo = document.getElementById('rapidInfo');
const rapidTimerEl = document.getElementById('rapidTimer');
const rapidStreakEl = document.getElementById('rapidStreak');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const modeSelect = document.getElementById('modeSelect');
const levelButtons = document.getElementById('levelButtons');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let mode = 'standard';
let levels = [];
let unlockedLevels = 1;
let rapidTimer = null;
let rapidTimeLeft = 10;
let rapidStreak = 0;

// persistence keys
const LS_UNLOCK_KEY = 'ofs_unlocked_levels';
const LS_LAST_SCORE = 'ofs_last_score';

function loadPersistence() {
  const u = parseInt(localStorage.getItem(LS_UNLOCK_KEY), 10);
  if (!Number.isNaN(u) && u > 0) unlockedLevels = u;
  const s = parseInt(localStorage.getItem(LS_LAST_SCORE), 10);
  if (!Number.isNaN(s)) window.lastScore = s;
  renderLastScore();
}

function savePersistence() {
  localStorage.setItem(LS_UNLOCK_KEY, String(unlockedLevels));
  if (typeof window.lastScore !== 'undefined') localStorage.setItem(LS_LAST_SCORE, String(window.lastScore));
  renderLastScore();
}

// UI element for last score
const lastScoreDisplay = document.getElementById('lastScoreDisplay');
function renderLastScore() {
  if (!lastScoreDisplay) return;
  const s = typeof window.lastScore === 'number' ? `${window.lastScore}%` : '--';
  lastScoreDisplay.textContent = `Last score: ${s}`;
}

// Simple offline 'AI' hints: keyword-based helper (no network)
const hintEngine = {
  // lightweight pattern hints and per-question hints
  questionHints: new Map(),
  register(questionSubstring, hint) {
    this.questionHints.set(questionSubstring.toLowerCase(), hint);
  },
  getHint(question) {
    const q = question.toLowerCase();
    // check specific registered hints first
    for (const [k, v] of this.questionHints.entries()) {
      if (q.includes(k)) return v;
    }
    // fallback pattern matches
    if (q.includes('phishing') || q.includes('bank asking')) return 'Phishing involves impersonation and requests for sensitive information; never send credentials via email.';
    if (q.includes('credit card') || q.includes('online') || q.includes('https')) return 'Always check for "https://" and confirm the domain before entering card details.';
    if (q.includes('two-factor') || q.includes('2fa') || q.includes('authentication')) return 'Two-factor (2FA) adds a second verification step like SMS, email, or an authenticator app.';
    if (q.includes('compound interest')) return 'Compound interest means you earn interest on both the principal and the accumulated interest; time and rate matter most.';
    if (q.includes('diversification')) return 'Diversification spreads risk across assets — it reduces the impact if one investment loses value.';
    if (q.includes('etf')) return 'An ETF is an Exchange-Traded Fund: it holds a basket of securities and trades like a stock.';
    if (q.includes('bond')) return 'A bond is a loan to an issuer (like a government) that pays periodic interest and returns principal at maturity.';
    if (q.includes('dividend')) return 'A dividend is a distribution of a company\'s earnings to shareholders, usually paid periodically.';
    if (q.includes('dollar-cost averaging')) return 'Dollar-cost averaging means investing a fixed amount regularly to reduce the impact of volatility.';
    // generic fallback
    return 'Try eliminating obviously wrong choices; look for keywords and match them to the most relevant concept.';
  }
};

// Register more specific hints mapped to parts of the questions
// these are brief, targeted hints that the chatbot can return
hintEngine.register('what does phishing refer', 'Phishing is when fraudsters pretend to be a trusted entity (like your bank) to steal data or money.');
hintEngine.register('safest way to use your credit card', 'Use secure sites (https), avoid unfamiliar links, and consider virtual card numbers for extra safety.');
hintEngine.register('two-factor authentication', '2FA requires two proofs: something you know (password) and something you have (phone, authenticator).');
hintEngine.register('identity theft', 'Unfamiliar charges and unexpected account changes are common identity theft signs; check credit reports and bank statements.');
hintEngine.register('compound interest', 'Compound interest grows on principal + previously earned interest; the longer it compounds, the more it grows.');
hintEngine.register('stocks', 'Stocks represent partial ownership in a company; they offer potential growth but with higher risk than bonds.');
hintEngine.register('etf', 'ETFs are diversified, traded like stocks, and often have lower fees than actively managed funds.');
hintEngine.register('mutual fund', 'Mutual funds pool investors\' money to buy a diversified portfolio managed by professionals.');
hintEngine.register('diversification', 'A diversified portfolio mixes asset types (stocks, bonds, cash) to reduce concentration risk.');

// hints for newly added questions
hintEngine.register('emergency fund', 'An emergency fund covers unexpected expenses; aim for 3–6 months of essential expenses.');
hintEngine.register('apr', 'APR (Annual Percentage Rate) shows the yearly cost of borrowing including interest and fees — compare APRs when choosing loans.');
hintEngine.register('resp', 'RESPs are savings plans to help pay for a child\'s post-secondary education; they may include government grants.');
hintEngine.register('inflation', 'Inflation is when the general price level rises over time, reducing purchasing power; investments should consider inflation.');
hintEngine.register('tfsa', 'A TFSA allows tax-free growth and withdrawals; contributions are limited by annual room rules.');
hintEngine.register('liquidity', 'Liquidity refers to how quickly an asset can be converted to cash without significant loss.');
hintEngine.register('budget surplus', 'A budget surplus occurs when income exceeds expenses; it can be used to save or invest.');
hintEngine.register('rrsp', 'RRSPs are retirement accounts where contributions may be tax-deductible and grow tax-deferred until withdrawal.');
hintEngine.register('insurance', 'Insurance helps transfer certain risks to an insurer in exchange for premiums; it protects against specified losses.');

// load saved persisted state early
loadPersistence();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = activeQuestions[currentQuestion];

  quizContainer.innerHTML = '';
  flashcardContainer.classList.add('hide');
  rapidInfo.classList.add('hide');

  if (mode === 'flashcards') {
    flashcardContainer.classList.remove('hide');
    flashcardContainer.innerHTML = `<strong>Q:</strong> ${questionData.question}<br><em>Click \"Show Answer\" to reveal.</em>`;
    showAnswerButton.classList.remove('hide');
    submitButton.classList.add('hide');
    nextButton.classList.remove('hide');
    return;
  }

  if (mode === 'rapid') {
    rapidInfo.classList.remove('hide');
    rapidTimeLeft = 10; // seconds per question
    rapidTimerEl.textContent = rapidTimeLeft;
    rapidStreakEl.textContent = rapidStreak;
    flashcardContainer.classList.add('hide');
    showAnswerButton.classList.add('hide');
    submitButton.classList.remove('hide');
    nextButton.classList.add('hide');
    startRapidTimer();
  } else {
    showAnswerButton.classList.add('hide');
    submitButton.classList.remove('hide');
    nextButton.classList.add('hide');
  }

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

  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);

  // Add hover effects (re-add for new nodes)
  const optionsNodes = document.querySelectorAll('.option');
  optionsNodes.forEach(option => {
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
  if (mode === 'flashcards') {
  // reveal answer only
  const correctAnswer = activeQuestions[currentQuestion].answer.replace(/^[A-D]\.\s/, '');
  flashcardContainer.innerHTML = `<strong>Q:</strong> ${activeQuestions[currentQuestion].question}<br><strong>A:</strong> ${correctAnswer}`;
    return;
  }

  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (!selectedOption) return;

  const answer = selectedOption.value;
  const correctAnswer = activeQuestions[currentQuestion].answer.replace(/^[A-D]\.\s/, '');
  if (answer === correctAnswer) {
    score++;
    if (mode === 'rapid') {
      rapidStreak++;
      rapidStreakEl.textContent = rapidStreak;
    }
  } else {
      incorrectAnswers.push({
        question: activeQuestions[currentQuestion].question,
      incorrectAnswer: answer,
        correctAnswer: correctAnswer,
    });
    if (mode === 'rapid') rapidStreak = 0;
  }
  currentQuestion++;
  selectedOption.checked = false;
  if (currentQuestion < activeQuestions.length) {
    if (mode === 'rapid') {
      // continue
      displayQuestion();
    } else {
      displayQuestion();
    }
  } else {
    stopRapidTimer();
    displayResult();
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  // progress: unlock next level if score is decent
  const percent = Math.round((score / activeQuestions.length) * 100);
  if (percent >= 60 && unlockedLevels < levels.length) unlockedLevels++;

  // persist last score and unlocked levels
  window.lastScore = percent;
  if (percent >= 60 && unlockedLevels < levels.length) unlockedLevels++;
  savePersistence();

  resultContainer.innerHTML = `You scored <span class="emph">${score} out of ${activeQuestions.length}</span>! (<span class="emph">${percent}%</span>)`;
  // show incorrect answers
  if (incorrectAnswers.length) {
    let html = '<div><h4>Review:</h4>';
    incorrectAnswers.forEach(i => {
      html += `<p><strong>Q:</strong> ${i.question}<br><strong>Your:</strong> ${i.incorrectAnswer}<br><strong>Correct:</strong> <span class="emph">${i.correctAnswer}</span></p>`;
    });
    html += '</div>';
    resultContainer.innerHTML += html;
  }
  renderLevelButtons();
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
  // context-sensitive show answer (for flashcards it reveals, otherwise show review)
  if (mode === 'flashcards') {
  const correctAnswer = activeQuestions[currentQuestion].answer.replace(/^[A-D]\.\s/, '');
  flashcardContainer.innerHTML = `<strong>Q:</strong> ${activeQuestions[currentQuestion].question}<br><strong>A:</strong> ${correctAnswer}`;
    return;
  }
  // otherwise show review
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `\n      <p>\n        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>\n        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>\n        <strong>Correct Answer:</strong> <span class="emph">${incorrectAnswers[i].correctAnswer}</span>\n      </p>\n    `;
  }

  resultContainer.innerHTML = `\n    <p>You scored <span class="emph">${score} out of ${activeQuestions.length}</span>!</p>\n    <p>Incorrect Answers:</p>\n    ${incorrectAnswersHtml}\n  `;
}

submitButton.addEventListener('click', checkAnswer);

retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);
nextButton.addEventListener('click', () => {
  // advance manually in flashcard mode
  if (mode === 'flashcards') {
  currentQuestion = (currentQuestion + 1) % activeQuestions.length;
    displayQuestion();
  }
});

modeSelect.addEventListener('change', (e) => {
  mode = e.target.value;
  // reset small state
  stopRapidTimer();
  displayQuestion();
});

function startRapidTimer() {
  stopRapidTimer();
  rapidTimer = setInterval(() => {
    rapidTimeLeft -= 1;
    rapidTimerEl.textContent = rapidTimeLeft;
    if (rapidTimeLeft <= 0) {
      // treat as incorrect/no answer
      rapidStreak = 0;
      currentQuestion++;
  if (currentQuestion >= activeQuestions.length) {
        stopRapidTimer();
        displayResult();
      } else {
        displayQuestion();
      }
    }
  }, 1000);
}

function stopRapidTimer() {
  if (rapidTimer) clearInterval(rapidTimer);
  rapidTimer = null;
}

// Level system: split questions into groups (levels of N questions)
function initLevels(size = 6) {
  levels = [];
  for (let i = 0; i < quizData.length; i += size) {
    levels.push(quizData.slice(i, i + size));
  }
  renderLevelButtons();
}

function renderLevelButtons() {
  levelButtons.innerHTML = '';
  for (let i = 0; i < levels.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'level-btn';
    btn.textContent = `L${i + 1}`;
    if (i + 1 > unlockedLevels) {
      btn.classList.add('locked');
      btn.disabled = true;
    } else {
      btn.addEventListener('click', () => selectLevel(i));
    }
    if (i === 0) btn.classList.add('active');
    levelButtons.appendChild(btn);
  }
}

function selectLevel(index) {
  // set quizData window to level questions by creating a shallow copy
  if (index + 1 > unlockedLevels) return;
  // swap quizData view: we will use a small view array and pointer
  window.currentLevelIndex = index;
  // flatten level into a runtime queue
  window.levelQueue = [...levels[index]];
  // replace quizData reference for current session
  // (we'll map display functions to levelQueue)
  // set up to use levelQueue as main source
  // find position mapping
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  activeQuestions = window.levelQueue; // switch active set
  document.querySelectorAll('.level-btn').forEach((b, i) => b.classList.toggle('active', i === index));
  displayQuestion();
  savePersistence();
}

// Initialize app
  initLevels(6);
// set default activeQuestions to first level
activeQuestions = [...levels[0]];
displayQuestion();

// Minimal styling adjustments that were previously inline
resultContainer.style.padding = '20px';
resultContainer.style.marginTop = '20px';
resultContainer.style.borderRadius = '8px';
resultContainer.style.backgroundColor = '#f8f9fa';
resultContainer.style.border = '1px solid #dee2e6';

// Chatbot wiring
const chatWindow = document.getElementById('chatWindow');
const chatInputField = document.getElementById('chatInputField');
const chatSendButton = document.getElementById('chatSendButton');
const getHintBtn = document.getElementById('getHintBtn');

function addChatMessage(text, from = 'bot') {
  const wrapper = document.createElement('div');
  wrapper.className = `chat-msg ${from === 'user' ? 'user' : 'bot'}`;
  wrapper.style.marginBottom = '8px';

  const label = document.createElement('span');
  label.className = 'chat-label';
  label.textContent = from === 'user' ? 'You: ' : 'Assistant: ';

  const body = document.createElement('span');
  body.className = 'chat-body';
  body.textContent = text;

  wrapper.appendChild(label);
  wrapper.appendChild(body);
  chatWindow.appendChild(wrapper);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

chatSendButton.addEventListener('click', () => {
  const text = chatInputField.value.trim();
  if (!text) return;
  addChatMessage(text, 'user');
  // simple handling: if user asks about a question id, route to hintEngine
  const q = activeQuestions[currentQuestion].question;
  let response = '';
  if (text.toLowerCase().includes('hint')) response = hintEngine.getHint(q);
  else response = `I can help with hints. Try asking for a "hint" or mention keywords like "compound interest".`;
  setTimeout(() => addChatMessage(response, 'bot'), 400);
  chatInputField.value = '';
});

getHintBtn.addEventListener('click', () => {
  const q = activeQuestions[currentQuestion].question;
  const h = hintEngine.getHint(q);
  addChatMessage(h, 'bot');
});
