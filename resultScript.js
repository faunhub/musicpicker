let finalChoice = localStorage.getItem("finalVerdict");

let resultList = [
    {
        songTitle : 'Uso no Tsukikata by Love Love Love.',
        message : 'A Jpop rock ballad to do your homework to. Note: It is a outro of a really good Netflix show.',
        embededLink : '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6yxmvcwA1fZpc9BjiFvs55?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    },
    {
        songTitle : 'The Moon and Me by Tippy Balady.',
        message : 'An indie ballad to relax and read something with your cats.',
        embededLink : '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6er9orrniX3oYWgnyPoO8t?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    },
    {
        songTitle : 'Sparkling by Chung Ha.',
        message : 'Issa bop.',
        embededLink : '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6TzU11huC8Hz4FVEsvCeE7?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    },
    {
        songTitle : 'Eleanor Rigby by The Beatles.',
        message : 'We are going old school with a Beatles number. One of my favorites from them.',
        embededLink :'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5GjPQ0eI7AgmOnADn1EO6Q?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    },
    {
        songTitle : 'Ivy by Frank Ocean.',
        message : 'It was pure and special and that was all there is to it.',
        embededLink : '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2ZWlPOoWh0626oTaHrnl2a?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    },
    {
        songTitle : 'Orange by Joni',
        message : 'Get on a bike and ride into the sunset with this song.',
        embededLink : '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0enDszLAooqcY7ZkrsKdaR?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    }
]

function setResults(){
    resultAnnouncement.textContent = resultList[finalChoice-1].songTitle;
    resultComment.textContent = resultList[finalChoice-1].message;
    spotifyLink.innerHTML = resultList[finalChoice-1].embededLink;
}

const resultAnnouncement = document.querySelector('.result');
const resultComment = document.querySelector('.resultComment');
const spotifyLink = document.querySelector('.spotifyLink');
setResults();