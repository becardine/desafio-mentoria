//Dark Mode

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('dark-mode')
})


//Imagens e textos random 
const listCard = [
  {
    images: "src/img/img-1.jpg",
    title: 'Esse é o título um'
  },
  {
    images: "src/img/img-2.jpg",
    title: 'Esse é o título dois'
  },
  {
    images: "src/img/img-3.jpg",
    title: 'Esse é o título três'
  }
]

function random() {
  const {images} = listCard[Math.floor(Math.random() * listCard.length)]
  const {title} = listCard[Math.floor(Math.random() * listCard.length)]

  const titulo = document.createElement('h3')
  titulo.classList = 'titulo-card'
  titulo.innerHTML = title
  const titleCard = document.querySelector('.cardTitle')
  titleCard.appendChild(titulo)

  const img = document.createElement('img')
  img.src = images 
  const card = document.querySelector('.cardImg')
  card.appendChild(img)
}
function random2() {
  const {images} = listCard[Math.floor(Math.random() * listCard.length)]
  const {title} = listCard[Math.floor(Math.random() * listCard.length)]

  const titulo = document.createElement('h3')
  titulo.classList = 'titulo-card'
  titulo.innerHTML = title
  const titleCard = document.querySelector('.cardTitle2')
  titleCard.appendChild(titulo)

  const img = document.createElement('img')
  img.src = images
  const card2 = document.querySelector('.cardImg2')
  card2.appendChild(img)
}
function random3() {
  const {images} = listCard[Math.floor(Math.random() * listCard.length)]
  const {title} = listCard[Math.floor(Math.random() * listCard.length)]

  const titulo = document.createElement('h3')
  titulo.classList = 'titulo-card'
  titulo.innerHTML = title
  const titleCard = document.querySelector('.cardTitle3')
  titleCard.appendChild(titulo)

  const img = document.createElement('img')
  img.src = images
  const card3 = document.querySelector('.cardImg3')
  card3.appendChild(img)
}

document.addEventListener('DOMContentLoaded', random())
document.addEventListener('DOMContentLoaded', random2())
document.addEventListener('DOMContentLoaded', random3())
