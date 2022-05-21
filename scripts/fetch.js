async function getMedias () {
  return fetch('./data/photographers.json')
    .then(resp => resp.json())
    .then(data => {
      const medias = data.media
      return medias
    })
}

async function getPhotographers () {
  return fetch('./data/photographers.json')
    .then(resp => resp.json())
    .then(data => {
      const photographers = data.photographers
      return photographers
    })
}
