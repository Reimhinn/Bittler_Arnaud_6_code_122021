// récupération des données //

async function getMedias() {
  return fetch("./data/photographers.json").then(resp => resp.json()).then(data => {
    const medias = data.media;
    return medias;
  })
}

async function getPhotographers() {
  return fetch("./data/photographers.json").then(resp => resp.json()).then(data => {
  const photographers = data.photographers;
  return photographers;
  })
}



async function displayData (photographer, medias) {
// destructuration de l'objet en variable //
const { name, portrait, price, city, country, tagline } = photographer;
const picture = `assets/photographers/${portrait}`

const photographMediasContainer = document.querySelector(".photograph-medias")

medias.forEach((media) => {

  const mediaModel = mediasFactory(media);
  const mediaDOM = mediaModel.getMediaDOM();
  photographMediasContainer.appendChild(mediaDOM);

})

// utilisation des variables pour implémenter l'html //
const templatePhotographerProfil = `<h2 class="name">${name}</h2>
<p class="location">${city}, ${country}</p>
<p class="tagline">${tagline}</p>`

const templatePriceWindow = `<span>${likesCount} <i class="fa-solid fa-heart"></i></span> <span>${price}€ / jour</span>`

const profilData = document.getElementById('profil-data')
profilData.innerHTML = templatePhotographerProfil;

const priceWindow = document.querySelector('.price-window')
priceWindow.innerHTML = templatePriceWindow;

document.getElementById("profil-image").src = picture;

const mediaContainer = document.querySelector(".media-container")
mediaContainer.addEventListener("click", openCarousel)

const carousel = document.querySelector(".carousel")

function openCarousel() {
  carousel.style.display = "block"
  console.log("test carousel")
}

}




async function init() {

  // récupération des données //

  const photographers = await getPhotographers();
  console.log('photographers:', photographers)

  const medias = await getMedias();
  console.log("medias", medias)

  // récupération de l'url //
  const urlData = window.location.search;

  // transformation des paramètres de l'url en objet //
  const urlParams = new URLSearchParams(urlData);
  const params = Object.fromEntries(urlParams)

  //  création de la variable id et transformation de l'id de string à number //
  const id = parseInt(params.id, 10);

  // trouver le bon photographer et media en fonction de l'id //
  const foundPhotographer = photographers.find(photographer => photographer.id === id);

  const foundMedias = medias.filter(media => media.photographerId === id);

  displayData(foundPhotographer, foundMedias)

  console.log("foundMedias", foundMedias)
  console.log("foundphotographer", foundPhotographer)

}




init()