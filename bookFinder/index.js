const searchBtn = document.querySelector(".search-btn");
const searchInfo = document.querySelector(".search-info");
const searchInput = document.querySelector(".search-input");

function getBooks(bookName) {
  let url = "http://openlibrary.org/search.json";

  if (Boolean(bookName)) {
    url += `?q=${bookName}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((books) => {
        console.log(books);
      });
  }
}

searchBtn.addEventListener("click", () => {
  let bookName = searchInput.value.trim();
  searchInfo.style.display = "flex";


  getBooks(bookName);
});
