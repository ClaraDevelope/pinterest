import './cards.css'

export const drawCard = (data, parent) => {
  // console.log('Drawing card:', data)
  const card = document.createElement('div')
  card.className = 'card-container'

  const image = document.createElement('img')
  image.src = data.urls.small
  image.alt = data.alt_description

  // const description = document.createElement('p')
  // description.innerText = data.alt_description

  card.append(image)
  parent.append(card)
}
