const quiz = [
    {
        question: "HTML stands for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyperlinks Text Mark Language",
        correct: "a"
    },
    {
        question: "Which one is a CSS property?",
        a: "color",
        b: "function",
        c: "script",
        correct: "a"
    },
    {
        question: "JavaScript is used for?",
        a: "Structure",
        b: "Styling",
        c: "Interactivity",
        correct: "c"
    }
];

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("optA").innerText = q.a;
    document.getElementById("optB").innerText = q.b;
    document.getElementById("optC").innerText = q.c;

    // uncheck options
    document.querySelectorAll('input[name="option"]').forEach(opt => opt.checked = false);
}

function nextQuestion() {
    const selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (selected.value === quiz[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("question-box").style.display = "none";
        document.querySelector("button").style.display = "none";
        document.getElementById("result").innerText =
            "Your Score: " + score + " / " + quiz.length;
    }
}
