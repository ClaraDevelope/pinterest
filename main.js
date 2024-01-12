import './style.css'
import { navbar } from './src/components/navbar/navbar.js'
import { createCardSection } from './src/components/imagesSection/images.js'
import { drawCard } from './src/components/cards/cards.js'
import { createButton } from './src/components/button/button.js'
import { createFooter } from './src/components/footer/footer.js'
createFooter

createCardSection()
let totalImages = 0
async function CallApi(inputValue, page = 1) {
  const USER_KEY = '_VtxJJpqoAQc1RM-7y5fAouBNFTC22E4hVglMeLAOKg'
  const API_URL = `https://api.unsplash.com/search/photos?query=${inputValue}&page=${page}&client_id=${USER_KEY}`
  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    const app = document.querySelector('#app')
    const cardSection = document.createElement('section')
    cardSection.className = 'cardSection'
    if (data && data.results && data.results.length > 0) {
      const cardSection = document.querySelector('.cardSection')
      cardSection.innerHTML = ''
      data.results.forEach((item) => {
        drawCard(item, cardSection)
      })
      app.append(cardSection)
    } else {
      createCardSection()
      console.log('Data is empty or not defined:', data)
    }
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

createButton()

const showMoreButton = document.getElementById('show-more')
let currentPage = 1

showMoreButton.addEventListener('click', async () => {
  try {
    currentPage++
    const perPage = 10 + totalImages
    const inputValue = searchInput.value
    await CallApi(inputValue, currentPage, perPage)
  } catch (error) {
    console.log('Error al cargar más imágenes', error)
  }
})

createFooter()
