let questionsList = [
    {
        question: 'What is your favorite season?',
        choice1: '> Summer ☀️',
        choice2: '> Fall/Spring 🌸',
        choice3: '> > Winter ☃️', 
    },
    {
        question: 'Does your wardrobe consists most of?',
        choice1: '> Warm tones (i applaud ur bravery).',
        choice2: '> Cold tones (u are like mama)',
        choice3: '> Black and white (chic, are u?)', 
    },
    {
        question: 'Pick a country.',
        choice1: '> US of America ?🇺🇸',
        choice2: '> France, oui🇫🇷',
        choice3: '> Japan (i am a weeb) 🇯🇵', 
    },
    {
        question: 'If you had the choice, where would you go for vacation?',
        choice1: '> A beer and the beach.',
        choice2: '> The mountains, of course.',
        choice3: '> A fast and modern city, where i can be anything and nothing.',
    },
    {
        question: 'Pick a color for my ginger cat.',
        choice1: '> Red.',
        choice2: '> Green.',
        choice3: '> Purple.',
    },
    {
        question: 'Imagine you are a European artist in the early 20th century, which art movement would you join?',
        choice1: '> Fauvism.',
        choice2: '> Surrealism.',
        choice3: '> De Stijl.',
    },
    {
        question: 'Which potato chip flavor is the superior choice? I love all of these btw',
        choice1: '> Sour onion.',
        choice2: '> Salt.',
        choice3: '> BBQ.',
    },
    {
        question: 'Oh someone just texed you. Will you....',
        choice1: '> Reply straight away because you cannot let them wait!',
        choice2: '> Put it aside and then proceed to forget about it forever.',
        choice3: '> Finish your movie and reply half an hour later.',
    },
    {
        question: 'How are you feeling right now?',
        choice1: '> Idk. Moody.',
        choice2: '> Pretty relax I think.',
        choice3: '> Oh absolutely pumped!!!!',
    },
    {
        question: 'Oh this is just random. But it might change the answer... who knows?',
        choice1: '> Pick me.',
        choice2: '> No, pick me!',
        choice3: '> I will not beg.',
    },
]

function compareScores() {
    let highestScore;
    if (scoreA > scoreB && scoreA > scoreC){
        highestScore = 1;
    } else if (scoreB > scoreA && scoreB > scoreC){
        highestScore = 2;
    } else if (scoreC > scoreA && scoreC > scoreB){
        highestScore = 3;
    } else {
        if (scoreA == scoreB){
            highestScore = 4;
        } else if (scoreB == scoreC){
            highestScore = 5;
        } else {
            highestScore = 6;
        }
    }
    return highestScore;
}

function endPage() {
    let finalAnswer = compareScores();
    
    localStorage.setItem("finalVerdict", finalAnswer);
    window.location.href = 'result.html';
}

function resetAnswerColors(){
    answerSection.forEach(answer => answer.style.removeProperty('color'));
}

function tallyScores(){
    choice = currentChoice.className;
    if (choice == 'option1'){
        scoreA++;
    } else if (choice == 'option2'){
        scoreB++;
    } else {
        scoreC++;
    }
    console.log (scoreA + " " + scoreB + " " + scoreC);
}

function nextQuestion(){
    tallyScores();
    currentChoice = null;
    let currentNo = parseInt(questionCounter.textContent);
    if (currentNo >=10){
        endPage();
        return;
    }
    /*update currentNo */ currentNo++;
    console.log(currentNo)
    resetAnswerColors();

    /*update question */
    questionCounter.textContent = currentNo;
    currentQuestion.textContent = questionsList[currentNo-1].question;

    /*update answers*/
    currentChoice = null;
    answer1.textContent = questionsList[currentNo-1].choice1;
    answer2.textContent = questionsList[currentNo-1].choice2;
    answer3.textContent = questionsList[currentNo-1].choice3;
    
}
function chooseAnswer(){
    resetAnswerColors();
    currentChoice = this;
    this.style.color = 'rgb(214, 156, 196)';
}

function loadScreen(){
    /*set question */
    questionCounter.textContent = '1';
    currentQuestion.textContent = questionsList[0].question;

    /*set answers */
    answer1.textContent = questionsList[0].choice1;
    answer2.textContent = questionsList[0].choice2;
    answer3.textContent = questionsList[0].choice3;
    console.log(questionCounter.textContent);
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
let scoreA =0;
let scoreB =0;
let scoreC =0;

answerSection.forEach(answer => answer.addEventListener('click', chooseAnswer));
nextQuestionButton.addEventListener('click', nextQuestion);

loadScreen();




