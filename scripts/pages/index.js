async function getPhotographers() {
 fetch("./data/photographers.json").then(resp => resp.json()).then(data => {
  const photographers = data.photographers
  console.log("data", data.photographers)
     displayData(photographers);

})
}
  // et bien retourner le tableau photographers seulement une fois


async function displayData(photographers) {
  console.log('photograpes',photographers)
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
      const photographerModel = photographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
  });
};

async function init() {
  // Récupère les datas des photographes
  getPhotographers();
 // const { photographers } = await getPhotographers();
 // displayData(photographers);
};

init();


