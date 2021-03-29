const searchBtn = document.querySelector(".search-btn");
const searchInfo = document.querySelector(".search-info");
const searchInput = document.querySelector(".search-input");

function liBuilder(title, authorName, firstPublishYear, subjects) {
  const titleElem = document.createElement("p");
  const authorNameElem = document.createElement("p");
  const firstPublishYearElem = document.createElement("p");
  const subjectElems = document.createElement("p");
  const div = document.createElement("div");
  const li = document.createElement("li");

  div.setAttribute("class", "book-content");
  if (authorName !== undefined && subjects !== undefined) {
    console.log(
      title,
      authorName[0],
      firstPublishYear,
      subjects.splice(0, 5).join(" ,")
    );
  }
}

function getBooks(bookName) {
  let url = "http://openlibrary.org/search.json";

  if (Boolean(bookName)) {
    if (bookName.split(" ").length === 1) {
      url += `?q=${bookName}`;
    } else {
      url += "?q=";
      url += bookName.split(" ").reduce((acc, el) => {
        return acc + `+${el}`;
      });
    }
    console.log(url);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((books) => {
        searchInfo.style.display = "block";
        searchInfo.textContent += `${books.numFound} hits`;

        let booksArr = books.docs;

        booksArr.forEach((el) => {
          liBuilder(el.title, el.author_name, el.publish_year[0], el.subject);
        });
        console.log(books);
      });
  }
}

searchBtn.addEventListener("click", () => {
  let bookName = searchInput.value.trim();

  getBooks(bookName);
});
