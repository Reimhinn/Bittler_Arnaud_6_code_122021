import { getPhotographers } from '../fetch.mjs'
import { photographerFactory } from '../factories/photographer.mjs'

async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  // Faire appraitre les photographes de façon dynamique //

  photographers.forEach(photographer => {
    const photographerModel = photographerFactory(photographer)
    const photographerCardDOM = photographerModel.getPhotographerCardDOM()
    photographersSection.appendChild(photographerCardDOM)
  })
}

async function init () {
  const photographers = await getPhotographers()
  displayData(photographers)
}

init()
