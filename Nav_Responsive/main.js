let searchButton = document.querySelector(".search_button");
let closeButton = document.querySelector(".close_button");
let searchBox = document.querySelector(".search_box");
let navigation = document.querySelector(".navigation");
let menoToggle = document.querySelector(".menu_toggle");
let header = document.querySelector("header");

searchButton.onclick = () => {
  searchBox.classList.add("active");
  searchButton.classList.add("active");
  closeButton.classList.add("active");
  menoToggle.classList.add("hide");
  header.classList.remove("open");
};

closeButton.onclick = () => {
  searchBox.classList.remove("active");
  searchButton.classList.remove("active");
  closeButton.classList.remove("active");
  menoToggle.classList.remove("hide");
};

menoToggle.onclick = () => {
  header.classList.toggle("open");
  searchBox.classList.remove("active");
  searchButton.classList.remove("active");
  closeButton.classList.remove("active");
};
