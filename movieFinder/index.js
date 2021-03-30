const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");
const movieBox = document.querySelector(".movie-box-container");

const searchState = {
  value: "",
  title: "",
  description: "",
  director: "",
  producer: "",
  releaseDate: "",
};

function getMovie(data) {
  data.forEach((el) => {
    if (searchState.value === el.title) {
      searchState.title = el.title;
      searchState.description = el.description;
      searchState.director = el.director;
      searchState.producer = el.producer;
      searchState.releaseDate = el.release_date;
      console.log(searchState);
    }
  });
}

function renderMovie() {
  let url = "https://ghibliapi.herokuapp.com/films";

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movies) => {
      getMovie(movies);
    });
}

searchBtn.addEventListener("click", () => {
  searchState.value = input.value;

  renderMovie();
});
