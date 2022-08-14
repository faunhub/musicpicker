let finalChoice = localStorage.getItem("finalVerdict");
function setResults(){
    if (finalChoice == 'A'){
        resultAnnouncement.textContent = "Uso no Tsukikata by Love Love Love.";
    } else if (finalChoice == 'B'){
        resultAnnouncement.textContent = "The Moon and Me by Tippy Balady.";
    } else {
        resultAnnouncement.textContent = "Sparkling by Chung Ha."
    }
}

const resultAnnouncement = document.querySelector('.result');
setResults();