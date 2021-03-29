const searchBtn = document.querySelector(".search-btn");
const searchInfo = document.querySelector(".search-info");
const searchInput = document.querySelector(".search-input");
const list = document.querySelector(".content-list");

const searchState = {
  value: "",
  pageCount: 0,
  currentPage: 1,
};

function liBuilder(title, authorName, firstPublishYear, subjects) {
  const titleElem = document.createElement("p");
  const authorNameElem = document.createElement("p");
  const firstPublishYearElem = document.createElement("p");
  const subjectElems = document.createElement("p");
  const div = document.createElement("div");
  const li = document.createElement("li");

  if (
    authorName !== undefined &&
    subjects !== undefined &&
    firstPublishYear !== undefined
  ) {
    div.classList.add("book-content");
    titleElem.innerHTML = `<b>Title:</b>  ${title}`;
    authorNameElem.innerHTML = `<b>Author Name:</b>  ${authorName}`;
    firstPublishYearElem.innerHTML = `<b>Publish Year:</b>  ${firstPublishYear[0]}`;
    subjectElems.innerHTML = `<b>Subjects:</b>  ${subjects
      .splice(0, 5)
      .join(" ,")}`;

    div.append(titleElem, authorNameElem, firstPublishYearElem, subjectElems);
    li.append(div);

    return li;
  }
}

function getBooks() {
  let url = "http://openlibrary.org/search.json?q=";

  if (Boolean(searchState.value)) {
    if (searchState.value.split(" ").length === 1) {
      url += `${searchState.value}&page=${searchState.currentPage}`;
    } else {
      let joinedStrs = searchState.value.split(" ").reduce((acc, el) => {
        return acc + `+${el}`;
      });

      url += `${joinedStrs}&page=${searchState.currentPage}`;
    }
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((books) => {
        searchInfo.style.display = "block";
        searchInfo.textContent = `${books.numFound} hits`;

        books.docs.forEach((el) => {
          let content = liBuilder(
            el.title,
            el.author_name,
            el.publish_year,
            el.subject
          );

          if (content !== undefined) {
            list.append(content);
          }
        });
      })
      .catch((error) => {
        alert(`${error}`);
      });
  }
}

searchBtn.addEventListener("click", () => {
  searchState.value = searchInput.value.trim();
  list.innerHTML = "";
  searchInfo.textContent = "Loading...";

  getBooks();
});
