function mediaFactory(media) {
  const {
    id,
    photographerId,
    title,
    image,
    likes,
    date,
    price,
    video,
  } = media;

  function getMediaCardDOM() {
    const mediaCardDOM = document.createElement('article');

    const mediaUrl = `assets/medias/${image || video}`;

    const pictureTemplate = `
      <img data-id=${id} class="media-container" src="${mediaUrl}">
      <div class="img-flex">
        <p>${title}</p>
        <p>${likes}</p>
      </div>
    `;

    const videoTemplate = `
      <video data-id=${id} class="media-container" width="300" height="300">
        <source src="${mediaUrl}" type="video/webm">
      </video>
      <div class="img-flex">
        <p>${title}</p>
        <p>${likes}</p>
      </div>
    `;

    const mediaTemplate = image
      ? pictureTemplate
      : videoTemplate;

    mediaCardDOM.innerHTML = mediaTemplate;
    return mediaCardDOM;
  }

  function getMediaCarouselDOM() {
    const mediaCarouselDOM = document.createElement('div');
    mediaCarouselDOM.classList.add("carousel-media-container");

    const mediaUrl = `assets/medias/${image || video}`;

    pictureTemplate = `
      <img class="carousel-media" src="${mediaUrl}" alt="">
      <h2 class="carousel-caption">${title}</h2>`

    videoTemplate = `
      <video controls class="carousel-media" src="${mediaUrl}"></video>
      <h2 class="carousel-caption">${title}</h2>`

    const selectedTemplate = image
      ? pictureTemplate
      : videoTemplate;

    mediaCarouselDOM.innerHTML = selectedTemplate;
    return mediaCarouselDOM;
  }

  return {
    ...media,
    getMediaCardDOM,
    getMediaCarouselDOM,
  };
}
