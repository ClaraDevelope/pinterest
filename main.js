import './style.css'
import { navbar } from './src/components/navbar/navbar.js'
import { createCardSection } from './src/components/imagesSection/images.js'
import { createValueCardSection } from './src/components/imagesSection/images.js'
import { drawCard } from './src/components/cards/cards.js'

createCardSection()

const CallApi = (inputValue) => {
  console.log(inputValue)
  const accessKey = 'g6eFRes8Scdf-v3-7NskAUI3a6ia-iN19f53RynwFy8'
  const API_URL = `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${accessKey}`
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      createValueCardSection(data, API_URL)
      // drawCard(data, parent)
    })
    .catch((error) => {
      console.log('Error al obtener los datos de la API', error)
    })
}

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    const inputValue = event.target.value
    CallApi(inputValue)
  }
}

const searchInput = document.querySelector('#searchBar')
searchInput.addEventListener('keydown', handleKeyDown)
