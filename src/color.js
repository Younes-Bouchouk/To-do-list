let statusDropsdown = 'close';
let triangle = document.getElementById('triangle')

function changeClass() {
    if (statusDropsdown == 'close'){
        statusDropsdown = 'open'
    }else {
        statusDropsdown = 'close'
    }
    triangle.src = `img/triangle-${statusDropsdown}.png`
}

let nom = '';
let color = '';
let btn = document.querySelector('#dropdown > button')
let btnText = document.querySelector('#dropdown > button > p')

let blue = document.getElementById('blue');
let black = document.getElementById('black');
let purple = document.getElementById('purple');
let pink = document.getElementById('pink');

black.addEventListener('click', function(){
    nom = 'Noir'
    color = 'black'

    btnText.textContent = nom
    btn.style.color = color
    input.style.color = color
})

blue.addEventListener('click', function(){
    nom = 'Bleu'
    color = '#0cc0df'

    btnText.textContent = nom
    btn.style.color = color
    input.style.color = color
})

purple.addEventListener('click', function(){
    nom = 'Violet'
    color = '#cb6ce6'

    btnText.textContent = nom
    btn.style.color = color
    input.style.color = color
})

pink.addEventListener('click', function(){
    nom = 'Rose'
    color = '#ff5959'

    btnText.textContent = nom
    btn.style.color = color
    input.style.color = color
})