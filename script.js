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
]

function nextQuestion(){
    let currentNo = parseInt(questionCounter.textContent);
    if (currentNo >=5){
        return;
    }
    questionCounter.textContent = currentNo+1;
    currentQuestion.textContent = questionsList[currentNo-1].question;
}

/*main */
const questionCounter = document.querySelector('.counter');
const currentQuestion = document.querySelector('.question');
const nextQuestionButton = document.querySelector('.nextQ');


nextQuestionButton.addEventListener('click', nextQuestion);



