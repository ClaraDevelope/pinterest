import './images.css'

import { drawCard } from '../cards/cards'

// COGER LA URL DE LA API + PHOTOS?PER_PAGE... (MIRA A VER CÓMO SE CONSTRUYE LA URL E INTENTA HACER UN MATH FLOOR (MATH RANDOM) DEL NÚMERO DE PÁGINA PARA QUE CADA VEZ QUE SE CARGUE, LLEGUEN IMÁGENES NUEVAS) AYÚDATE DEL GITHUB DE VIRGINIA Y DE PAULA
export const createCardSection = (data) => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const cardSection = document.createElement('section')
  cardSection.className = 'cardSection'
  const USER_KEY = 'g6eFRes8Scdf-v3-7NskAUI3a6ia-iN19f53RynwFy8'
  const randomPage = Math.floor(Math.random() * 346) + 1
  let API_URL = `https://api.unsplash.com/photos?page=${randomPage}&client_id=${USER_KEY}`
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        // console.log(item)
        drawCard(item, cardSection)
      })
    })
  app.append(cardSection)
}
// createCardSection()

export const createValueCardSection = (data, API_URL) => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const cardSection = document.createElement('section')
  cardSection.className = 'cardSection'

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        // console.log(item)
        drawCard(item, cardSection)
      })
    })
  app.append(cardSection)
}
