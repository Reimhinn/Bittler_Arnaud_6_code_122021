async function displayData (photographer, medias) {
  const photographMediasContainer = document.querySelector('.photograph-medias')

  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    photographMediasContainer.appendChild(mediaCardDOM);
  })

  const filterSelect = document.querySelector('.filter-select')

  filterSelect.addEventListener('click', () => {
    if (filterSelect.options[filterSelect.selectedIndex].value == 'Title') {
      medias.sort((a, b) => {return a.title.localeCompare(b.title)});
      console.log('sorted medias', medias);
  }
  })


  // if (filterSelect.options[filterSelect.selectedIndex].value == "Popularity") {
  //   likesCountArray.sort(function(a, b) {return b-a})
  //   console.log(likesCountArray)
  // }


  const photographerModel = photographerFactory(photographer, medias);
  const photographerProfileDOM = photographerModel.getPhotographerProfileDOM();
  const priceWindowDOM = photographerModel.getPriceWindowDOM();
  const mediaUrl = `assets/photographers/${mediaUrl}`

  document.querySelector('#profil-data').replaceWith(photographerProfileDOM);
  document.querySelector('.price-window').replaceWith(priceWindowDOM);
  document.getElementById('profil-image').src = mediaUrl;

  const mediaContainers = document.querySelectorAll('.media-container');

  mediaContainers.forEach(container => {
    container.addEventListener('click', openCarousel);
  });

  const carousel = document.querySelector('.carousel');
  const carouselMediaContainer = document.querySelector('.carousel-media-container');

  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');

  let mediaIndex = 0;


  nextArrow.addEventListener('click', event => {
    mediaIndex++;
    if (mediaIndex > medias.length - 1) {
      mediaIndex = 0;
    }
    showMedia(mediaIndex);
  })

  prevArrow.addEventListener('click', event => {
    mediaIndex--;
    if (mediaIndex < 0) {
      mediaIndex = medias.length - 1;
    }
    showMedia(mediaIndex);
  })

  function showMedia(index) {
    const media = medias[index];

    const mediaModel = mediaFactory(media);
    const mediaCarouselDOM = mediaModel.getMediaCarouselDOM();

    document.querySelector('.carousel-media-container').replaceWith(mediaCarouselDOM);
  }


  function openCarousel(clickEvent) {
    carousel.style.display = 'flex';
    const targetElement = clickEvent.target;
    const targetMediaID = targetElement.dataset.id;
    mediaIndex = medias.findIndex(media => media.id == targetMediaID);

    showMedia(mediaIndex);
  }

  document.querySelector('.carousel-close').addEventListener('click', event => {
    carousel.style.display = 'none';
  });
}

async function init() {
  const photographers = await getPhotographers();
  const medias = await getMedias();

  const urlData = window.location.search;
  const urlParams = new URLSearchParams(urlData);
  const params = Object.fromEntries(urlParams);

  const id = parseInt(params.id, 10);

  const photographer = photographers.find(photographer => photographer.id === id);
  const medias = medias.filter(media => media.photographerId === id);

  displayData(photographer, medias);
}

init();
