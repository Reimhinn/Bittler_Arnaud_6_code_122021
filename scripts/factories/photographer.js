function photographerFactory(photographer, medias = []) {
  const {
    name,
    portrait,
    price,
    id,
    city,
    country,
    tagline,
  } = photographer;

  let likeCount = 0;

  medias.forEach((media) => {
    likeCount += media.likes;
  });

  function getPhotographerCardDOM() {
    const photographerCardDOM = document.createElement('article');

    const pictureUrl = `assets/photographers/${portrait}`;

    const template = `
      <a href="photographer.html?id=${id}">
        <img src="${pictureUrl}">
        <h2 class="name">${name}</h2>
      </a>
      <p class="location">${city}, ${country}</p>
      <p class="tagline">${tagline}</p>
      <p class="price">${price}€/jour</p>
    `;

    photographerCardDOM.innerHTML = template;
    return photographerCardDOM;
  }

  function getPhotographerProfileDOM() {
    const photographerProfileDOM = document.createElement('article');
    photographerProfileDOM.id = 'profil-data';

    const template = `
      <h2 class="name">${name}</h2>
      <p class="location">${city}, ${country}</p>
      <p class="tagline">${tagline}</p>
    `;

    photographerProfileDOM.innerHTML = template;
    return photographerProfileDOM;
  }

  function getPriceWindowDOM() {
    const priceWindowDOM = document.createElement('div');
    priceWindowDOM.classList.add('price-window');

    const template = `
      <span>${likeCount}<i class="fa-solid fa-heart"></i></span>
      <span>${price}€ / jour</span>
    `;

     priceWindowDOM.innerHTML = template;
     return priceWindowDOM;
  }

  return {
    ...photographer,
    getPhotographerCardDOM,
    getPhotographerProfileDOM,
    getPriceWindowDOM,
  };
}
