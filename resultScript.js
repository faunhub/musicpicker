let finalChoice = localStorage.getItem("finalVerdict");

let resultList = [
    {
        songTitle : 'Uso no Tsukikata by Love Love Love.',
        message : 'A Jpop rock ballad to do your homework to. Note: It is a outro of a really good Netflix show.'
    },
    {
        songTitle : 'The Moon and Me by Tippy Balady.',
        message : 'An indie ballad to relax and read something with your cats.'
    },
    {
        songTitle : 'Sparkling by Chung Ha.',
        message : 'Issa bop.'
    },
    {
        songTitle : 'Eleanor Rigby by The Beatles.',
        message : 'We are going old school with a Beatles number. One of my favorites of them.'
    },
    {
        songTitle : 'Ivy by Frank Ocean.',
        message : 'It was pure and special and that was all there is to it.'
    },
    {
        songTitle : 'Orange by Joni',
        message : 'Get on a bike and ride into the sunset with this song.'
    }
]

function setResults(){
    resultAnnouncement.textContent = resultList[finalChoice-1].songTitle;
    resultComment.textContent = resultList[finalChoice-1].message;
}

const resultAnnouncement = document.querySelector('.result');
const resultComment = document.querySelector('.resultComment');
setResults();