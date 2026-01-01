const myQuestions = [
    {
        id: 1,
        question: "I have ......... to London four times so far.",
        options: { a: "gone", b: "been", c: "gone to", d: "commuted" },
        correct: "b"
    },
    {
        id: 2,
        question: "Find the correct sentence.",
        options: { a: "He shall go the exhibiton center", b: "I shall visit that country next month", c: "We shall go shopping in next week", d: "Shall you have a meeting tomorrow?" },
        correct: "b"
    },
    {
        id: 3,
        question: "That was the house ......... last month.",
        options: { a: "whose I wanted to buy", b: ", which I wanted to buy", c: "which I wanted to buy", d: "which I will wanted to buy" },
        correct: "c"
    },
    {
        id: 4,
        question: "You are not taking part in today's competition, .......",
        options: { a: "are you?", b: "are not you?", c: "aren't you?", d: "will you?" },
        correct: "a"
    },
    {
        id: 5,
        question: "I am one of the participants in this tournament, .......",
        options: { a: "am not I?", b: "am I?", c: "isn't I?", d: "aren't I?" },
        correct: "d"
    },
    {
        id: 6,
        question: "The news in this channel ...... never been misleading, ........",
        options: { a: "have/is they?", b: "have/aren't they?", c: "has/isn't it?", d: "has/has it?" },
        correct: "d"
    },
    {
        id: 7,
        question: "None these souvenirs are affordable, ........",
        options: { a: "are they?", b: "aren't they?", c: "are them?", d: "aren't them?" },
        correct: "a"
    },
    {
        id: 8,
        question: "Tom purchased ........ piano yesterday.",
        options: { a: "the", b: "a", c: "—", d: "an" },
        correct: "b"
    },
    {
        id: 9,
        question: "He has been able to ........ for 2 years, ........",
        options: { a: "play the guitar/hasn't he?", b: "sing the guitar/hasn't he?", c: "play a guitar/hasn't he?", d: "play a guitar/has he?" },
        correct: "a"
    },
    {
        id: 10,
        question: "The plane to Dubai ....... at 5 am tomorrow. ",
        options: { a: "will leave", b: "leaves", c: "is leaving", d: "will leaves" },
        correct: "b"
    },
    {
        id: 11,
        question: "If I ....... you, I would just embrace that offer.",
        options: { a: "were", b: "will be", c: "am", d: "are" },
        correct: "a"
    },
    {
        id: 12,
        question: "I wish I ...... able to fly.",
        options: { a: "am", b: "will", c: "will be", d: "was" },
        correct: "d"
    },
    {
        id: 13,
        question: "If only he ........ the chance to travel abroad.  ",
        options: { a: "has", b: "had", c: "was", d: "owns" },
        correct: "b"
    },
    {
        id: 14,
        question: "Jack bought some candy ...... brother.",
        options: { a: "to his", b: "for her", c: "to her", d: "for his" },
        correct: "d"
    },
    {
        id: 15,
        question: "All the ....... in the aquarium belong to a single species.",
        options: { a: "fish", b: "fishes", c: "fishshes", d: "fishs" },
        correct: "a"
    },
    {
        id: 16,
        question: "Standing in front of the judge, the robber ...... the bank",
        options: { a: "denied to rob", b: "denied stealing", c: "denied robbing", d: "refused to steal" },
        correct: "c"
    },
    {
        id: 17,
        question: "The teacher ...... go.",
        options: { a: "allowed me", b: "permited me to", c: "let me to", d: "allowed me to" },
        correct: "d"
    },
    {
        id: 18,
        question: "I remembered ...... that book last time. ",
        options: { a: "reading", b: "to read", c: "read", d: "to reading" },
        correct: "a"
    },
    {
        id: 19,
        question: "Odd one out.",
        options: { a: "arid", b: "semi-arid", c: "wet", d: "dry" },
        correct: "c"
    },
    {
        id: 20,
        question: "Odd one out.",
        options: { a: "passion", b: "reluctance", c: "enthusiasm", d: "eagerness" },
        correct: "b"
    },
    {
        id: 21,
        question: "Odd one out.",
        options: { a: "put on", b: "take off", c: "wear", d: "try on" },
        correct: "b"
    },
    {
        id: 22,
        question: "Odd one out.",
        options: { a: "render assistance", b: "give a hand", c: "neglect", d: "aid" },
        correct: "c"
    },
    {
        id: 23,
        question: "Odd one out.",
        options: { a: "affordable", b: "extravagent", c: "reasonable", d: "economical" },
        correct: "b"
    },
    {
        id: 24,
        question: "Odd one out.",
        options: { a: "I prefer reding a book to playing video games", b: "I prefer reding a book would rather playing video games", c: "I prefer reding a book rather than playing video games", d: "I prefer reding a book instead of playing video games" },
        correct: "b"
    },
    { 
        id: 25,
        question: "I prefer commuting to the office on foot ...... catching a taxi.",
        options: { a: "to", b: "than", c: "instead", d: "rather" },
        correct: "a"
    },
    {
        id: 26,
        question: "He has never disliked the transportation system here, ......",
        options: { a: "hasn't he", b: "didn't he", c: "he has", d: "has he" },
        correct: "d"
    },
    {
        id: 27,
        question: "Find the correct sentence.",
        options: { a: "Had the car been washed, we would not have had to clean it.", b: "Had the car washed, we would have cleaned it", c: "Was the car to washed, we would have not cleaned it", d: "Were the car washed, we would not clean it." },
        correct: "a"
    },
    {
        id: 28,
        question: "Find the correct sentence.",
        options: { a: "Should he sleeps on time, he will not be late for the school. ", b: "Should you come up with questions, feel free to give.", c: "Should I prees the switch button or does it star operating automatically.", d: "Should he return to the office, say him not to call." },
        correct: "c"
    },
    {
        id: 29,
        question: "Find the correct sentence.",
        options: { a: "Were he to be punctual, he would be here on time. ", b: "Were he realized the essence of accountibility, he would never miss lessons.", c: "Were he well-off, he would try to contribute to reducing the poverty", d: "Were he a narcissist, would he not thnk about others" },
        correct: "c"
    },
    {
        id: 30,
        question: "He was inspecting some of the old stuff .......",
        options: { a: "hoping to find something what he wanted", b: "hoping to find what he wanted", c: "hopefully finding the thing he wanted", d: "which he is lookinng for" },
        correct: "c"
    },
    

];

function displayQuiz() {
    const wrapper = document.getElementById('quiz-wrapper');
    if (!wrapper) return; // Agar HTML-da element topilmasa xato bermasligi uchun

    let htmlContent = '';

    myQuestions.forEach((q) => {
        // DIQQAT: Pastdagi belgi oddiy qo'shtirnoq emas, BACKTICK (  )
        htmlContent += `
                  <div class="question-block" id="block-${q.id}">
                <span class="question-text">${q.id}. ${q.question}</span>
                <ul class="options">
                    <li id="li-${q.id}-a"><input type="radio" name="q${q.id}" value="a"> A) ${q.options.a}</li>
                    <li id="li-${q.id}-b"><input type="radio" name="q${q.id}" value="b"> B) ${q.options.b}</li>
                    <li id="li-${q.id}-c"><input type="radio" name="q${q.id}" value="c"> C) ${q.options.c}</li>
                    <li id="li-${q.id}-d"><input type="radio" name="q${q.id}" value="d"> D) ${q.options.d}</li>
                </ul>
            </div>
       
        `;
    });
    wrapper.innerHTML = htmlContent;
}

function calculateScore() {
    let score = 0;
    myQuestions.forEach((q) => {
        const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
        document.querySelectorAll(`#block-${q.id} li`).forEach(li => li.classList.remove('correct', 'wrong'));
        document.getElementById(`li-${q.id}-${q.correct}`).classList.add('correct');

        if (selected) {
            if (selected.value === q.correct) {
                score++;
            } else {
                document.getElementById(`li-${q.id}-${selected.value}`).classList.add('wrong');
            }
        }
    });
    document.getElementById('result-area').innerHTML = `Your Score: ${score} / ${myQuestions.length}`;
}

window.onload = displayQuiz;
