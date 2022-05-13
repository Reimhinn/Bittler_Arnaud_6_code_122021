async function displayData (photographer, medias) {
  const photographMediasContainer = document.querySelector('.photograph-medias')

  function showMedias() {
    photographMediasContainer.innerHTML = ""


    medias.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const mediaCardDOM = mediaModel.getMediaCardDOM();
      photographMediasContainer.appendChild(mediaCardDOM);

    })

    const likesHeart = document.querySelectorAll(".likes-heart")

    likesHeart.forEach(heart => {
      heart.addEventListener("click", (event) => {
        let targetId = event.target.dataset.id
        let targetMedia = medias.find(media => media.id == targetId)
        console.log(targetMedia)
        targetMedia.likes++;
        photographerModel = photographerFactory(photographer, medias);
        priceWindowDOM = photographerModel.getPriceWindowDOM();


        document.querySelector('.price-window').replaceWith(priceWindowDOM);
        showMedias()

      })
    })
  }

  showMedias()

console.log(medias)

  let photographerModel = photographerFactory(photographer, medias);
  const photographerProfileDOM = photographerModel.getPhotographerProfileDOM();
  let priceWindowDOM = photographerModel.getPriceWindowDOM();
  const mediaUrl = `assets/photographers/${photographer.portrait}`


  document.querySelector('#profil-data').replaceWith(photographerProfileDOM);
  document.querySelector('.price-window').replaceWith(priceWindowDOM);
  document.getElementById('profil-image').src = mediaUrl;

    const filterSelect = document.querySelector('.filter-select')

    function sortByPopularity() {
      medias.sort((a, b) => b.likes - a.likes)
    }

    function sortByTitle() {
      medias.sort((a, b) => a.title.localeCompare(b.title));
    }

    function sortByDate() {
      medias.sort((a, b) => a.date.localeCompare(b.date))
      console.log(medias)
    }


  filterSelect.addEventListener('change', (event) => {
    switch (event.target.value) {
    case "Title" :
      sortByTitle()
      showMedias()
      break;
    case "Date" :
      sortByDate()
      showMedias()
      break;
    case "Popularity" :
      sortByPopularity()
      showMedias()
  }
})


  const mediaContainers = document.querySelectorAll('.media-container');

  mediaContainers.forEach(container => {
    container.addEventListener('click', openCarousel);
  });

  const carousel = document.querySelector('.carousel');
  const carouselMediaContainer = document.querySelector('.carousel-media-container');

  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');

  let mediaIndex = 0;


  nextArrow.addEventListener('click', () => {
    mediaIndex++;
    if (mediaIndex > medias.length - 1) {
      mediaIndex = 0;
    }
    showMedia(mediaIndex);
  })

  prevArrow.addEventListener('click', () => {
    mediaIndex--;
    if (mediaIndex < 0) {
      mediaIndex = medias.length - 1;
    }
    showMedia(mediaIndex);

  })


  function checkKey(event) {

    if (event.keyCode == "37") {
      prevArrow.click()
    }
    else if (event.keyCode == "39") {
      nextArrow.click()
    }
  }




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
  const photographerMedias = medias.filter(media => media.photographerId === id);

  displayData(photographer, photographerMedias);
}




init();
