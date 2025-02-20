import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  const splideTesty = new Splide("#splide-testy", {
    perPage: 3,
    gap: "10px",
    pagination: false,
  });
  splideTesty.mount();

  const splideModels = new Splide(".splide-models", {
    perPage: 1,
    gap: "10px",
    arrows: false,
    pagination: false,
    drag: false,
    classes: {
      pagination: "splide__pagination__tabs",
      page: "splide__pagination__tab",
    },
  });
  splideModels.mount();
  const splideModelsGallery = document.querySelectorAll(
    ".splide-models--gallery"
  );
  splideModelsGallery.forEach((splideElement, index) => {
    const splideGallery = new Splide(splideElement, {
      perPage: 1,
      gap: "10px",
      arrows: true,
      pagination: false,
      rewind: true,
    });
    splideGallery.mount();
  });
  window.splideModels = splideModels;
  document
    .querySelectorAll(".splide__pagination__tab")
    .forEach((button, idx) => {
      button.addEventListener("click", () => {
        splideModels.go(idx);
      });
    });
});
