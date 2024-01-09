import './style.css'
import { navbar } from './src/components/navbar/navbar.js'
import { createCardSection } from './src/components/imagesSection/images.js'
import { createValueCardSection } from './src/components/imagesSection/images.js'
import { drawCard } from './src/components/cards/cards.js'

createCardSection()

async function CallApi(inputValue) {
  console.log(inputValue)
  const USER_KEY = '_VtxJJpqoAQc1RM-7y5fAouBNFTC22E4hVglMeLAOKg'
  const API_URL = `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${USER_KEY}`
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    const app = document.querySelector('#app')
    const cardSection = document.createElement('section')
    cardSection.className = 'cardSection'
    if (data && data.results && data.results.length > 0) {
      const cardSection = document.querySelector('.cardSection')
      cardSection.innerHTML = ''
      data.results.forEach((item) => {
        // console.log(item)
        drawCard(item, cardSection)
      })
      app.append(cardSection)
    } else {
      console.log('Data is empty or not defined:', data)
    }
    // createValueCardSection(data, API_URL)
  } catch (error) {
    console.log('Error al obtener los datos de la API', error)
  }
}

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    const inputValue = event.target.value
    CallApi(inputValue)
  }
}

const searchInput = document.querySelector('#searchBar')
searchInput.addEventListener('keydown', handleKeyDown)
