var search = document.getElementById("search");
var inputSearch = document.getElementById("input-search");
var x = document.getElementById("x");
search.addEventListener("click", function () {
  search.style.width = "300px";
  x.style.display = "flex";
  inputSearch.style.display = "flex";
  setTimeout(function () {
    inputSearch.style.display = "flex";
    inputSearch.style.opacity = "1";
    x.style.opacity = "1";
  }, 300);
});

x.addEventListener("click", function () {
  x.style.opacity = "0";
  inputSearch.style.opacity = "0";
  setTimeout(function () {
    x.style.display = "none";
    search.style.width = "48px";
  }, 200);
});
