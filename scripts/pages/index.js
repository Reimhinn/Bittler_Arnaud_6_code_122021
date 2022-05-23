import { getMedias, getPhotographers } from '../fetch'
import { photographerFactory } from '../factories'

// et bien retourner le tableau photographers seulement une fois

async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach(photographer => {
    const photographerModel = photographerFactory(photographer)
    const photographerCardDOM = photographerModel.getPhotographerCardDOM()
    photographersSection.appendChild(photographerCardDOM)
  })
}

async function init () {
  // Récupère les datas des photographes
  const photographers = await getPhotographers()
  // console.log("data", photographers)
  displayData(photographers)
}

init()
