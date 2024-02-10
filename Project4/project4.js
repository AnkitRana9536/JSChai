console.log('Project-4')


let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber, 'randomNumber')
const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guess')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowHi')
const startOver = document.querySelector('.resultParse')

const p = document.createElement('p')
console.log(p)

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        console.log(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter valid number`)
    }
    else if (guess < 1) {
        alert(`Please enter a number more than one`)
    }
    else if (guess > 100) {
        alert(`Please enter a number less than 100`)
    }

    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMsg(`Game Over,Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`You guessed Right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMsg(`Number is Too low`)

    } else if (guess > randomNumber) {
        displayMsg(`Number is Too High`)

    }

}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

