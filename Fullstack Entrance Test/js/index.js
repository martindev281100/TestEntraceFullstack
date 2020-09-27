// function mergeArr() {
//     let A1 = prompt('Enter Array 1 (With commas): ');
//     A1 = A1.split(',')
//     let A2 = prompt('Enter Array 2 (With commas): ');
//     A2 = A2.split(',')
//     let newArr = []
//     for (let i = 0; i < A1.length; i++) {
//         newArr.push(Number(A1[i]))
//     }
//     for (let i = 0; i < A2.length; i++) {
//         newArr.push(Number(A2[i]))
//     }
//     console.log(newArr)
//     let length;
//     if (A1.length > A2.length) {
//         length = A1.length;
//     } else {
//         length = A2.length;
//     }
//     console.log(newArr.length)
//     for (let i = 0; i < newArr.length; i++) {
//         newArr.splice(0, 1)
//     }
//     console.log(newArr)

// }
// mergeArr()
async function quizApi() {
    let dataQuiz;
    await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
        .then(function (response) {
            response.json().then(function (data) {
                dataQuiz = data.results
            })
        })
    console.log(dataQuiz)
    let point = 0;
    let i = 0;
    quizQuestion(dataQuiz, i, point)
    document.getElementById('answer1').addEventListener('click', function () {
        alert('Correct')
        point++;
        i++;
        quizQuestion(dataQuiz, i, point)
    })
    document.getElementById('answer2').addEventListener('click', function () {
        alert('Incorrect')
        i++
        quizQuestion(dataQuiz, i, point)
    })
    document.getElementById('answer3').addEventListener('click', function () {
        alert('Incorrect')
        i++
        quizQuestion(dataQuiz, i, point)
    })
    document.getElementById('answer4').addEventListener('click', function () {
        alert('Incorrect')
        i++
        quizQuestion(dataQuiz, i, point)
    })
}

quizApi()

function quizQuestion(dataQuiz, i, point) {
    if (i === dataQuiz.length) {
        alert('Game over')
        i = 0;
    }
    document.getElementById('point').innerText = point
    document.getElementById('question').innerText = dataQuiz[i].question
    document.getElementById('answer1').innerText = dataQuiz[i].correct_answer
    document.getElementById('answer2').innerText = dataQuiz[i].incorrect_answers.pop()
    document.getElementById('answer3').innerText = dataQuiz[i].incorrect_answers.pop()
    document.getElementById('answer4').innerText = dataQuiz[i].incorrect_answers.pop()
}