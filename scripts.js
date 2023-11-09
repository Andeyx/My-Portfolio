let prevScrollPos = window.pageYOffset;
const nav = document.querySelector("nav");

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    nav.style.top = "0";
  } else {
    nav.style.top = `-${nav.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};
