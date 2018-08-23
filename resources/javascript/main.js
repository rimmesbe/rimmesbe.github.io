// -------------project toggle animations---------------

const projects = document.querySelectorAll(".project");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if(e.propertyName.includes("height")) {
    this.classList.toggle("open-active");
  }
}

if (window.matchMedia("(min-width: 601px)").matches) {
  projects.forEach(project => project.addEventListener("click", toggleOpen));
  projects.forEach(project => project.addEventListener("transitionend", toggleActive));
}

// -----------------sticky header-------------------

window.onscroll = function() {myFunction()};

const header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

// ---------------------email display----------------

function attachEmail(e) {
  if (e.target.innerHTML === "Email") {
    e.target.innerHTML = "RyanImmesberger@gmail.com";
  } else {
    e.target.innerHTML = "Email";
  }
}

const email = document.querySelector(".contact-link[href='#email']");
email.addEventListener("click", attachEmail);


// --------------------text shadow-----------------------

const banner = document.querySelector('.banner');
const bannerText = banner.querySelectorAll('h1');
const walk = 20;

function shadow(e) {
  const {offsetWidth: width, offsetHeight: height } = banner;
  let {offsetX: x, offsetY: y } = e;

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  bannerText.forEach(text => text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 #116bc5,
    ${xWalk + yWalk}px ${yWalk + xWalk}px 0 #329dd8,
    ${xWalk + (yWalk * 1.5)}px ${yWalk + (xWalk * 1.5)}px 0 #f95252
    `
  );
}

banner.addEventListener('mousemove', shadow);
