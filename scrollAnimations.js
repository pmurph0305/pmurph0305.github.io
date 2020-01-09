let options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.1, 0.75]
};

let observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible");
    }
  });
};

let observer = new IntersectionObserver(observerCallback);

let scrollElements = document.querySelectorAll(".animate-on-scroll");
scrollElements.forEach(element => {
  observer.observe(element);
  element.addEventListener("animationend", function() {
    if (element.classList.contains("reanimate")) {
      element.classList.remove("animate-visible");
    }
  });
});
