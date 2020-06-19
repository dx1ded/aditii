const burgerElement = document.querySelector('.burger')
const blackBackground = document.querySelector('.burger__background')
const navElements = document.querySelectorAll('.burger .nav__item')

const open = () => {
  burgerElement.classList.remove('closed')
  blackBackground.classList.remove('closed')
}

const close = () => {
  burgerElement.classList.add('closed')
  blackBackground.classList.add('closed')
}

for (const element of navElements) {
  element.addEventListener('click', close)
}

document.querySelector('.burger__open').addEventListener('click', open)
document.querySelector('.burger__close').addEventListener('click', close)