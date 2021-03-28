const selector = document.querySelector("#selector");
const breedName = document.querySelector(".breed-name");
const searchBtn = document.querySelector(".search-btn");
const dogPic = document.querySelector(".dog-pic");
const pointerDrawing = document.querySelector(".pointer");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const getDogPicture = (breed, subBreed) => {
  let url = `https://dog.ceo/api/breed/${breed}`;

  if (subBreed !== undefined) {
    url += `/${subBreed}`;
  }

  if (breed !== "undefined") {
    //undefined in string because it is selector's value,
    breedName.textContent = selector.value;

    fetch(`${url}/images`)
      .then((res) => {
        return res.json();
      })
      .then((imgs) => {
        let random = getRandomInt(imgs.message.length - 1);
        dogPic.src = imgs.message[random];
      });
  } else {
    throw new Error("please select a breed name");
  }
};

searchBtn.addEventListener("click", () => {
  let inputValue = selector.value;
  let [breed, subBreed] = inputValue.split(" ");

  getDogPicture(breed, subBreed);
});
