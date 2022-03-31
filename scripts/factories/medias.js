function mediasFactory(data) {
  const { id, photographerId, title, image, likes, date, price } = data;
console.log("data", data)
console.log("title", title)


  function getMediaDOM() {

    let picture = `assets/medias/${image}`
    console.log(picture)

    let mediaArticle = document.createElement('article');
    let mediaTemplate = `<img src="${picture}">`;

    mediaArticle.innerHTML = mediaTemplate;

      return (mediaArticle);
  }
  return { getMediaDOM }
}