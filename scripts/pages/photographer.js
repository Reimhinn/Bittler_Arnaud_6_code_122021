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


const mediaContainers = document.querySelectorAll(".media-container")


// const mediaID = document.querySelectorAll("[data-id]")
// console.log("test", mediaID)

mediaContainers.forEach(container => {
  // console.log("id:", container.dataset)
  // const mediaIdArray = container.dataset
  // console.log("mediaId", mediaIdArray
  container.addEventListener("click", openCarousel)

})



const carousel = document.querySelector(".carousel")
const carouselMediaContainer = document.querySelector(".carousel-media-container")

function openCarousel(clickEvent) {
  carousel.style.display = "flex"
  const targetElement = clickEvent.target
  const targetMediaID = targetElement.dataset.id
  const targetMedia = medias.find(media => media.id == targetMediaID)

  console.log("targetMedia", targetMedia)

  templateCarouselImage = `
    <img class="carousel-media" src="assets/medias/${targetMedia.image}" alt="">
    <h2 class="carousel-caption">${targetMedia.title}</h2>`

  templateCarouselVideo = `
    <video controls class="carousel-media" src="assets/medias/${targetMedia.video}"></video>
    <h2 class="carousel-caption">${targetMedia.title}</h2>`

  const selectedTemplate = targetMedia.image
    ? templateCarouselImage
    : templateCarouselVideo;

  carouselMediaContainer.innerHTML = selectedTemplate


  // console.log("data-id", mediaID.dataset)

  // const mediaID = medias.find(media => medias.id ===)
  // carousel.innerHTML = $
}

const carouselClose = document.querySelector(".carousel-close").addEventListener("click", event => {
  carousel.style.display = "none"
})

}




async function init() {

  // récupération des données //

  const photographers = await getPhotographers();
  // console.log('photographers:', photographers)

  const medias = await getMedias();
  // console.log("medias", medias)

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

  // console.log("foundMedias", foundMedias)
  // console.log("foundphotographer", foundPhotographer)

}




init()