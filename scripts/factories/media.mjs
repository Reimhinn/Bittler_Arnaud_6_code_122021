export function mediaFactory (media) {
  const { id, title, image, likes, video } = media

  function getMediaCardDOM () {
    const mediaCardDOM = document.createElement('article')

    const mediaUrl = `./assets/medias/${image || video}`

    const pictureTemplate = `
      <img role="Image link" aria-label="${title}, closeup view" data-id=${id} class="media-container" src="${mediaUrl}">
      <div class="img-flex">
        <p role="Text" class="media-title">${title}</p>
        <span class="flex-likes">
          <p>${likes}</p>
          <i role="image" aria-label="likes" data-id=${id} class="fa-solid fa-heart likes-heart"></i>
        </span>
      </div>
    `

    const videoTemplate = `
      <video role="Image link" data-id=${id} class="media-container" width="300" height="300">
        <source src="${mediaUrl}" type="video/webm">
      </video>
      <div class="img-flex">
        <p role="Text" class="media-title">${title}</p>
        <span class="flex-likes">
          <p>${likes}</p>
          <i role="image" aria-label="likes" data-id=${id} class="fa-solid fa-heart likes-heart"></i>
        </span>
      </div>
    `

    const mediaTemplate = image ? pictureTemplate : videoTemplate

    mediaCardDOM.innerHTML = mediaTemplate
    return mediaCardDOM
  }

  function getMediaCarouselDOM () {
    const mediaCarouselDOM = document.createElement('div')
    mediaCarouselDOM.classList.add('carousel-media-container')

    const mediaUrl = `./assets/medias/${image || video}`

    const pictureTemplate = `
      <img role="image" class="carousel-media" src="${mediaUrl}" alt="${title}">
      <h2 role="Text" class="carousel-caption">${title}</h2>`

    const videoTemplate = `
      <video role="video" aria-label="${title}" controls class="carousel-media" src="${mediaUrl}"></video>
      <h2 role="Text" class="carousel-caption">${title}</h2>`

    const selectedTemplate = image ? pictureTemplate : videoTemplate

    mediaCarouselDOM.innerHTML = selectedTemplate
    return mediaCarouselDOM
  }

  return {
    ...media,
    getMediaCardDOM,
    getMediaCarouselDOM
  }
}
