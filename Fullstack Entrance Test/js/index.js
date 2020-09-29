// function mergeArr() {
//     let newArr = []
//     let A1 = prompt('Enter Array 1 (With commas): ');
//     A1 = A1.split(',')
//     let A2 = prompt('Enter Array 2 (With commas): ');
//     A2 = A2.split(',')
//     for (let i = 0; i < A1.length; i++) {
//         A1[i] = Number(A1[i])
//     }
//     for (let i = 0; i < A2.length; i++) {
//         A2[i] = Number(A2[i])
//     }
//     console.log(A1)
//     console.log(A2)

//     for (let i = 0; i < A1.length; i++) {
//         if (newArr.indexOf(A1[i]) === -1) {
//             newArr.push(A1[i])
//         }
//     }
//     for (let i = 0; i < A2.length; i++) {
//         if (newArr.indexOf(A2[i]) === -1) {
//             newArr.push(A2[i])
//         }
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