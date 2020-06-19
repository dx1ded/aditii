const sliderContent = [
  { title: "Cowhide Standard Crew", text: "White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit.", image: 'img/banner_images/1.png' },
  { title: "Green Stylesheet Crew", text: "Green coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit.", image: 'img/banner_images/2.png' },
  { title: "Strangers Life Band", text: "Original printed T-shirt to be cool man. White coloured, short-sleeved, printed T-shirt for men by Levi's.", image: 'img/banner_images/3.png' },
  { title: "Minimalystic Purple T-shirt", text: "Purple T-shirt drawned by cool designers. Lorem ipsum short-sleeved, printed in a regular fit. Lorem ipsum designer says", image: 'img/banner_images/4.png' },
  { title: "Dark Cargos StyleBand", text: "Army stranger ware to keep up! Waiting white coloured, short-sleeved, printed T-shirt for men by Levi's", image: 'img/banner_images/5.png' }
]

const sliderContainer = document.querySelector('.banner')
const sliderNav = document.querySelectorAll('.slider__nav span')

const sliderHandler = index => {
  const {title, text, image} = sliderContent[index]
  const sliderInfo = sliderContainer.childNodes[3] // .slider__info

  sliderContainer.childNodes[1].setAttribute('src', image) // Image
  sliderInfo.childNodes[1].textContent = title // Title
  sliderInfo.childNodes[3].textContent = text // Text

  sliderNav.forEach((element, navIndex) => {
    if (element.classList.contains('active')) element.classList.remove('active')
    return navIndex === index && element.classList.add('active')
  })
}

sliderNav.forEach((element, index) => {
  element.addEventListener('click', () => sliderHandler(index))
})