let likesCount = 0
let likesCountArray = []

function mediasFactory(data) {
  const { id, photographerId, title, image, likes, date, price, video } = data;
// console.log("data", data)
// console.log("title", title)
// console.log('video', video)



likesCount += likes
likesCountArray.push(likes)

  function getMediaDOM() {

    let picture = `assets/medias/${image}`
    let film = `assets/medias/${video}`
    // console.log(picture)

    let mediaArticle = document.createElement('article');
    let pictureTemplate = `<img data-id=${id} class="media-container" src="${picture}">
    <div class="img-flex">
      <p>${title}</p>
      <p>${likes}</p>
    </div>`
// console.log(id)
;


    const videoTemplate = `<video data-id=${id} class="media-container" width="300" height="300"><source src="${film}"
    type="video/webm">
    </video>
    <div class="img-flex">
      <p>${title}</p>
      <p>${likes}</p>
    </div>`


    if (image) {
      mediaArticle.innerHTML = pictureTemplate;
    } else if (video) {
      mediaArticle.innerHTML = videoTemplate;
    }

      return (mediaArticle);
  }
  return { getMediaDOM, likesCount }
}