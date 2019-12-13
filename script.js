const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
   console.log('Started');
   startButton.classList.add('hide');
   shuffledQuestions = questions.sort(() => Math.random() - .5);
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove('hide');
   setNextQuestion();
}

function setNextQuestion() {
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
   questionElement.innerHTML = question.question;
   question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if(answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer);
      answerButtonElement.appendChild(button)
   })
}

function resetState() {
   nextButton.classList.add('hide')
   while (answerButtonElement.firstChild) {
      answerButtonElement.removeChild(answerButtonElement.firstChild);
   }
}

function selectAnswer(e) {
   const selectButton = e.target
   const correct = selectButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
   })
}

const questions = [
   {
      question: 'What is 2 + 2',
      answers: [
         {text: '4', correct: true},
         {text: '22', correct: false}
      ]
   }
]