let btn = document.getElementById("Menubtn");
let list = document.getElementById("list");

btn.addEventListener("click", function () {
  list.classList.toggle("show");
});

let firstImg = document.getElementById("firstImg");
let secImg = document.getElementById("secImg");
let ThirdImg = document.getElementById("ThirdImg");
let landing = document.getElementById("landing");

firstImg.addEventListener("click", function () {
  landing.style.backgroundImage = "url('images/bg1.jpg')";
});

secImg.addEventListener("click", function () {
  landing.style.backgroundImage = "url('images/bg.jpg')";
});

ThirdImg.addEventListener("click", function () {
  landing.style.backgroundImage = "url('images/bg2.jpg')";
});

let dash = document.querySelectorAll(".dash div");

dash.forEach(function (item) {
  item.addEventListener(
    "click",
    function (e) {
      // ADDS AND REMOVES ACTIVE CLASS ON TABLINKS
      dash.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");

      // SOMEHOW EQUATE TAB LINKS TO TAB PANES
      console.log(e.target);
    },
    false
  );
});

// //////////////////////////////////////
// //////////////////////////////////////
let switchli = document.querySelectorAll(".portfolio-filter p");
let imgs = document.querySelectorAll(".protfolio-grid div");

switchli.forEach(function (li) {
  li.addEventListener("click", removeFunction);
  li.addEventListener("click", manageimg);
});

function removeFunction() {
  switchli.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageimg() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
