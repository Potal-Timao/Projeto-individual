var startButton = document.querySelector(".start_quiz");
var perguntaContainer = document.querySelector(".perguntas_container");
var respostaContainer = document.querySelector(".respostas_container");
var quentionText = document.querySelector(".perguntas");
var nextButton = document.querySelector(".next_quiz");

startButton.addEventListener("click", startJogo);
nextButton.addEventListener("click", displayProximaPergunta);

var currentQuestion = 0;
var totalCorrect = 0;

function startJogo() {
    startButton.classList.add("hide");
    perguntaContainer.classList.remove("hide");
    displayProximaPergunta();
}

function displayProximaPergunta() {
    while (respostaContainer.firstChild) {
        respostaContainer.removeChild(respostaContainer.firstChild);
    }

    if (currentQuestion === questions.length) {
        return finishGame();
    }

    document.body.removeAttribute("class");
    nextButton.classList.add("hide");

    quentionText.textContent = questions[currentQuestion].question;
    questions[currentQuestion].answer.forEach(answer => {
        var newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer");
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        respostaContainer.appendChild(newAnswer);

        newAnswer.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(event) {
    var answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        answerClicked.classList.add("correct");
        totalCorrect++;
    } else {
        answerClicked.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button !== answerClicked) {
            button.disabled = true;
        }
    });
    nextButton.classList.remove("hide");
    currentQuestion++;
}

function finishGame() {
    var totalQuestion = questions.length;
    var performance = Math.floor((totalCorrect * 100) / totalQuestion);

    var message = "";

    if (performance >= 80) {
        message = "Torcedor raiz!";
    } else if (performance >= 60) {
        message = "Torcedor Fiel!";
    } else if (performance >= 50) {
        message = "Torcedor Mediano!";
    } else if (performance >= 30) {
        message = "Torcedor Modinha!";
    } else {
        message = "Tem certeza que você torce para o corinthians? SOME DAQUI !";
    }
    
    perguntaContainer.innerHTML = `<p class="mensagem_final">Você acertou ${totalCorrect} de ${totalQuestion} questões!<span>Resultado: ${message}</span></p> 
    <button onclick="window.location.reload()" class="button">
    Refazer quiz!
    </button>
    <button onclick="window.location.href = 'DASH.HTML'" class="button">
    Ir para dashboard!
    </button>`;

    
    nextButton.classList.add("hide");

   
    nextButton.removeEventListener("click", displayProximaPergunta);
}



var questions = [
    {
        question: "Qual foi o ano de fundação do Sport Club Corinthians Paulista?",
        answer: [
            { text: "1920", correct: false },
            { text: "1912", correct: false },
            { text: "1910", correct: true },
            { text: "1911", correct: false },
        ],
    },
    {
        question: "Quem é o maior artilheiro da história do Corinthians?",
        answer: [
            { text: "Cláudio", correct: true },
            { text: "Serginho Chulapa", correct: false },
            { text: "Ronaldo", correct: false },
            { text: "Rivellino", correct: false },
        ],  
    },
    {
        question: "Em que ano o Corinthians conquistou seu primeiro título brasileiro?",
        answer: [
            { text: "1990", correct: true },
            { text: "1998", incorrect: false },
            { text: "1999", correct: false },
            { text: "1957", correct: false },
        ],
    },
    {
        question: "Qual foi o jogador que mais vezes vestiu a camisa do Corinthians em partidas oficiais?",
        answer: [
            { text: "Luizinho", correct: false },
            { text: "Cássio", correct: false },
            { text: "Ronaldo Giovanelli", correct: false },
            { text: "Wladimir", correct: true },
        ],
    },
    {
        question: "Em que ano o Corinthians conquistou o Campeonato Paulista de forma invicta, sem perder nenhum jogo?",
        answer: [
            { text: "2012", correct: false },
            { text: "2015", correct: false },
            { text: "1982", correct: false },
            { text: "2009", correct: true },
        ],
    },
    {
        question: "Qual foi o ano de fundação da equipe de futebol feminino do Corinthians?",
        answer: [
            { text: "1998", correct: false },
            { text: "2006", correct: false },
            { text: "1997", correct: true },
            { text: "2002", correct: false },
        ],
    },
    {
        question: "Qual goleiro revelado na base, tornou-se um dos maiores ídolos da história do Clube?",
        answer: [
            { text: "Júlio César", correct: false},
            { text: "Ronaldo Giovanelli", correct: false },
            { text: "Dida", correct: true },
            { text: "Cássio", correct: false },
        ],
    },
    {
        question: "Quantas vezes o Corinthians feminino foi campeão da Copa Libertadores da América?",
        answer: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ],
    },
    {
        question: "Qual gigante europeu o Corinthians eliminou para chegar a final do Mundial de clubes da FIFA em 2000?",
        answer: [
            { text: "Barcelona", correct: false },
            { text: "Manchester United", correct: false },
            { text: "Real Madrid", correct: true },
            { text: "Vasco da Gama", correct: false },
        ],
    },
    {
        question: "Qual destes atletas NÃO vestiu a camisa do Corinthians?",
        answer: [
            { text: "Ronaldo", correct: false },
            { text: "Zico", correct: true },
            { text: "Roberto Carlos", correct: false },
            { text: "Rivellino", correct: false },
        ],
    },
];
