// récupération des données //

async function getPhotographers() {
  return fetch("./data/photographers.json").then(resp => resp.json()).then(data => {
  const photographers = data.photographers
  return photographers;
  })
}

async function getUrlData() {
// récupération de l'url //
const urlData = window.location.search;

// transformation des paramètres de l'url en objet //
const urlParams = new URLSearchParams(urlData);
const params = Object.fromEntries(urlParams)


const photographers = await getPhotographers();
console.log(photographers)

const id = parseInt(params.id, 10);

const foundPhotographer = photographers.find(element => element.id === id);


// destructuration de l'objet en variable //
const { name, portrait, price, city, country, tagline } = foundPhotographer;
const picture = `assets/photographers/${portrait}`

// utilisation des variables pour implémenter l'html //
let templatePhotographerProfil = `<h2 class="name">${name}</h2>
<p class="location">${city}, ${country}</p>
<p class="tagline">${tagline}</p>`

let profilData = document.getElementById('profil-data')
profilData.innerHTML = templatePhotographerProfil;

document.getElementById("profil-image").src = picture;
}

getUrlData()
