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

projects.forEach(project => project.addEventListener("click", toggleOpen));
projects.forEach(project => project.addEventListener("transitionend", toggleActive));


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
