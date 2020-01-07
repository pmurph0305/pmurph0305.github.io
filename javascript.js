function buttonArrowHover(isHovered) {
  let arrow = document.getElementById("landing-button-arrow");
  if (isHovered) {
    arrow.classList.add("btn__img--down");
  } else {
    arrow.classList.remove("btn__img--down");
  }
}

function onMyWorkClick() {
  let section = document.getElementById("section-about");
  section.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth"
  });
}
