export function photographerFactory (photographer, medias = []) {
  const { name, portrait, price, id, city, country, tagline } = photographer

  let likeCount = 0

  medias.forEach(media => {
    likeCount += media.likes
  })

  function getPhotographerCardDOM () {
    const photographerCardDOM = document.createElement('article')

    const pictureUrl = `assets/photographers/${portrait}`

    const template = `
      <a role="link" href="./photographer.html?id=${id}">
        <img role="image" aria-label="${name}" src="${pictureUrl}">
        <h2 aria-label="${name}" class="name">${name}</h2>
      </a>
      <p role="Text paragraph" class="location">${city}, ${country}</p>
      <p role="Text paragraph" class="tagline">${tagline}</p>
      <p role="Text paragraph" class="price">${price}€/jour</p>
    `

    photographerCardDOM.innerHTML = template
    return photographerCardDOM
  }

  function getPhotographerProfileDOM () {
    const photographerProfileDOM = document.createElement('article')
    photographerProfileDOM.id = 'profil-data'

    const template = `
      <h1 role="Header" class="name">${name}</h1>
      <p role="Text" class="location">${city}, ${country}</p>
      <p role="Text" class="tagline">${tagline}</p>
    `

    photographerProfileDOM.innerHTML = template
    return photographerProfileDOM
  }

  function getPriceWindowDOM () {
    const priceWindowDOM = document.createElement('div')
    priceWindowDOM.classList.add('price-window')

    const template = `
      <span role="Text" class="flex-likes-heart"><p class="likeCount">${likeCount}</p><i class="fa-solid fa-heart"></i></span>
      <span role="Text">${price}€ / jour</span>
    `

    priceWindowDOM.innerHTML = template
    return priceWindowDOM
  }

  return {
    ...photographer,
    getPhotographerCardDOM,
    getPhotographerProfileDOM,
    getPriceWindowDOM,
    likeCount
  }
}
