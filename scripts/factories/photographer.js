function photographerFactory(data) {
    const { name, portrait, price, id, city, country, tagline } = data;
console.log("data", data)
console.log("portrait", portrait)
    const picture = `assets/photographers/${portrait}`;
console.log("portrait", portrait)
    function getUserCardDOM() {

            let articlePhotographers = document.createElement('article');
            let templatePhotographer =
            `<a href="photographer.html?id=${id}">
                <img src="${picture}">
                <h2 class="name">${name}</h2>
            </a>
            <p class="location">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}€/jour</p>`

            articlePhotographers.innerHTML = templatePhotographer;

              console.log("artcicle", articlePhotographers)

        return (articlePhotographers);
    }
    return { name, picture, getUserCardDOM }
}