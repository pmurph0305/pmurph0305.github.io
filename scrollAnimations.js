let scrollAnimation =
  window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 16);
  };

let scrollElements = document.querySelectorAll(".animate-on-scroll");
function onScrollElements() {
  scrollElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add("animate-visible");
    } else {
      element.classList.remove("animate-visible");
    }
  });
  scrollAnimation(onScrollElements);
}
onScrollElements();

function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
