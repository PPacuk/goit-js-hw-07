import { galleryItems } from "./gallery-items.js";
// Change code below this line

const lightbox = new SimpleLightbox(".gallery", {});

const gallery = document.querySelector(".gallery");

galleryItems.forEach((element) => {
	// const item = document.createElement("div");
	// item.classList.add("gallery__item");
	// gallery.append(item);

	const link = document.createElement("a");
	link.classList.add("gallery__link");
	link.href = element.original;
	gallery.append(link);

	const image = document.createElement("img");
	image.classList.add("gallery__image");
	image.src = element.preview;
	image.alt = element.description;
	image.dataset.source = element.original;
	link.append(image);
});

gallery.addEventListener("click", (event) => {
	event.preventDefault();
	const clickedImg = event.target;
	if (clickedImg.nodeName !== "IMG") return;
	const originalImg = clickedImg.dataset.source;
	// const modal = instance.element();
	// const modalImg = modal.querySelector("img");
	// const description = clickedImg.alt;
	// modalImg.src = originalImg;
	// modalImg.alt = description;
	lightbox.open();
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Escape") return;
	instance.close();
});
