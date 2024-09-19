const questions = [
    {
        question: "1. Qual jogo ganhou o GOTY de 2023",
        answers: ["Resident evil 4", "Spider-Man 2", "Baldur's Gate 3", "The Legend of Zelda: Tears of the Kingdom"],
        correctAnswer: 2
    },
    {
        question: "2. Qual dos seguintes jogos da FromSoftware é exclusivo de console?",
        answers: ["Dark Souls 3", "Elden Ring", "Sekiro: Shadows Die Twice", "BloodBorne"],
        correctAnswer: 3
    },
        
    {
        question: "3. Qual dos Seguintes jogos foi lançado em 2022?",
        answers: ["Elden Ring","Fortnite","Rainbow Six: Siege","Valorant"],
        correctAnswer: 0
    },
    {
        question: "4. A qual franquia de jogos pertence o personagem Kratos?",
        answers: ["Assassin's Creed", "God of War","Far Cry", "GTA"],
        correctAnswer: 1
    },
    {   
        question: "5. Qual dos seguintes jogos não é um FPS?",
        answers: ["VALORANT", "Counter-Strike 2","Strinova", "Destiny 2"],
        correctAnswer: 2
    }
    ];


function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function resetQuiz() {
    document.getElementById('perguntas').reset();
}


function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;