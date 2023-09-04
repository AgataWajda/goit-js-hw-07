import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((item) => {
  const box = document.createElement("div");
  box.classList.add("gallery__item");
  const link = document.createElement("a");
  link.setAttribute("href", item.original);
  link.classList.add("gallery__link");
  box.append(link);
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.setAttribute("src", item.preview);
  image.setAttribute("data-source", item.original);
  image.setAttribute("alt", item.description);
  link.append(image);
  items.push(box);
});

gallery.append(...items);

const handleClick = (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
     <img src = "${event.target.dataset.source}" />
    `);
  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
};

gallery.addEventListener("click", handleClick);
