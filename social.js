const bar = document.querySelector('.la-bars')
const ul = document.querySelector('.uls')
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.la-times-circle')


bar.addEventListener('click', () => {

    overlay.classList.toggle('display-flex')
})

close.addEventListener('click', () => {

    overlay.classList.toggle('display-flex')
})