let questionsList = [
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '3',
        choice3: '4', 
    },
    {
        question: 'What is 2+3?',
        choice1: 'a',
        choice2: 'b',
        choice3: '4', 
    },
    {
        question: 'What is 2+4?',
        choice1: 'c',
        choice2: 'd',
        choice3: '4',
    },
    {
        question: 'What is 2+5?',
        choice1: 'c',
        choice2: 'fs',
        choice3: '4',
    },
    {
        question: 'What is 2+6?',
        choice1: 'c',
        choice2: 'fs',
        choice3: 'dsa',
    },
    {
        question: 'What is 2+7?',
        choice1: 'cdsd',
        choice2: 'fs',
        choice3: '4',
    },
    {
        question: 'What is 2+8?',
        choice1: 'c',
        choice2: 'fs',
        choice3: '434',
    },
    {
        question: 'What is 2+9?',
        choice1: 'cds',
        choice2: 'fs',
        choice3: '4cn',
    },
    {
        question: 'What is 2+10?',
        choice1: 'c1',
        choice2: 'fs',
        choice3: '468',
    },
]

function resetAnswerColors(){
    answerSection.forEach(answer => answer.style.removeProperty('color'));
}

function nextQuestion(){
    let currentNo = parseInt(questionCounter.textContent);
    if (currentNo >=10){
        window.location.href = 'result.html';
    }
    resetAnswerColors();
    questionCounter.textContent = currentNo+1;
    currentQuestion.textContent = questionsList[currentNo-1].question;
    answer1.textContent = questionsList[currentNo-1].choice1;
    answer2.textContent = questionsList[currentNo-1].choice2;
    answer3.textContent = questionsList[currentNo-1].choice3;
    
}

function chooseAnswer(){
    resetAnswerColors();
    currentChoice = this;
    this.style.color = 'red';
}


/*main */
const questionCounter = document.querySelector('.counter');
const currentQuestion = document.querySelector('.question');
const nextQuestionButton = document.querySelector('.nextQ');
const answer1 = document.querySelector('.option1');
const answer2 = document.querySelector('.option2');
const answer3 = document.querySelector('.option3');
const answerSection = [answer1, answer2, answer3];

let currentChoice;

answerSection.forEach(answer => answer.addEventListener('click', chooseAnswer));
nextQuestionButton.addEventListener('click', nextQuestion);




