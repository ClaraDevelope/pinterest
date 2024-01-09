import './images.css'

import { drawCard } from '../cards/cards'

export const createCardSection = (data) => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const cardSection = document.createElement('section')
  cardSection.className = 'cardSection'
  const USER_KEY = '_VtxJJpqoAQc1RM-7y5fAouBNFTC22E4hVglMeLAOKg'
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

export async function createValueCardSection(data, API_URL) {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const cardSection = document.createElement('section')
  cardSection.className = 'cardSection'

  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    for (const item of data) {
      const card = await drawCard(item, cardSection)
      cardSection.appendChild(card)
    }

    app.appendChild(cardSection)
  } catch (error) {
    console.error('Error fetching data from API:', error)
  }
}

// createCardSection()

// export const createValueCardSection = (data, API_URL) => {
//   const app = document.querySelector('#app')
//   app.innerHTML = ''
//   const cardSection = document.createElement('section')
//   cardSection.className = 'cardSection'

//   fetch(API_URL)
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((item) => {
//         // console.log(item)
//         drawCard(item, cardSection)
//       })
//     })
//   app.append(cardSection)
// }
