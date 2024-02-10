console.log('Project-2')
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const msg = document.querySelector('#msg')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
    console.log(result.textContent, 'result')

    if (result.textContent < 18.6) {
        console.log(result, 'result')
        msg.innerHTML = `This is under Weight`
    } else if (result.textContent >= 18.6 && result.textContent <= 24.9) {
        msg.innerHTML = `This is Normal Weight`

    }else if (result.textContent > 24.9) {
        msg.innerHTML = `This is Over Weight`

    }
});