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


function ranking() {
    let data = [{
        name: "Arsenal",
        points: 60,
        GD: 40
    }, {
        name: "Chelsea",
        points: 75,
        GD: 45
    }, {
        name: "Manchester City",
        points: 72,
        GD: 50
    }, {
        name: "Manchester United",
        points: 80,
        GD: 60
    }, {
        name: "Liverpool",
        points: 55,
        GD: 30
    }, {
        name: "Tottenham",
        points: 55,
        GD: 33
    }, {
        name: "Leicester City",
        points: 55,
        GD: 33
    }]

    for (let i = 0; i < data.length; i++) {
        for (let i = 1; i < data.length; i++) {
            console.log(data[i - 1].points + ' < ' + data[i].points)
            if (data[i - 1].points < data[i].points) {
                let a = data[i - 1]
                data[i - 1] = data[i]
                data[i] = a
            } else if (data[i - 1].points === data[i].points) {
                if (data[i - 1].GD < data[i].GD) {
                    let b = data[i - 1]
                    data[i - 1] = data[i]
                    data[i] = b
                } else if (data[i - 1].GD === data[i].GD) {
                    if (data[i - 1].name[0] > data[i].name[0]) {
                        let c = data[i - 1]
                        data[i - 1] = data[i]
                        data[i] = c
                    }
                }
            }
        }
    }

    console.log(data)
}

ranking();
// async function quizApi() {
//     let dataQuiz;
//     await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
//         .then(function (response) {
//             response.json().then(function (data) {
//                 dataQuiz = data.results
//             })
//         })
//     console.log(dataQuiz)
//     let point = 0;
//     let i = 0;
//     quizQuestion(dataQuiz, i, point)
//     document.getElementById('answer1').addEventListener('click', function () {
//         alert('Correct')
//         point++;
//         i++;
//         quizQuestion(dataQuiz, i, point)
//     })
//     document.getElementById('answer2').addEventListener('click', function () {
//         alert('Incorrect')
//         i++
//         quizQuestion(dataQuiz, i, point)
//     })
//     document.getElementById('answer3').addEventListener('click', function () {
//         alert('Incorrect')
//         i++
//         quizQuestion(dataQuiz, i, point)
//     })
//     document.getElementById('answer4').addEventListener('click', function () {
//         alert('Incorrect')
//         i++
//         quizQuestion(dataQuiz, i, point)
//     })
// }

// quizApi()

// function quizQuestion(dataQuiz, i, point) {
//     if (i === dataQuiz.length) {
//         alert('Game over')
//         i = 0;
//     }
//     document.getElementById('point').innerText = point
//     document.getElementById('question').innerText = dataQuiz[i].question
//     document.getElementById('answer1').innerText = dataQuiz[i].correct_answer
//     document.getElementById('answer2').innerText = dataQuiz[i].incorrect_answers.pop()
//     document.getElementById('answer3').innerText = dataQuiz[i].incorrect_answers.pop()
//     document.getElementById('answer4').innerText = dataQuiz[i].incorrect_answers.pop()
// }