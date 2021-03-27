const selector = document.querySelector("#selector");
const breedName = document.querySelector(".breed-name");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  breedName.textContent = selector.value;
});
