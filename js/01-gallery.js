import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");


const markup = galleryItems.map(({preview, description, original}) => `<li class="gallery__item"> <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
<img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}"/>  
  </a>
</li>`).join("");


listEl.insertAdjacentHTML("beforeend", markup);


listEl.addEventListener("click", onClick);

function onClick  (event) {
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    const imageId = event.target.dataset.source;
    const currentItem = galleryItems.find(({ original }) => original === imageId);
    console.log(currentItem);
    const instance = basicLightbox.create(`<div class="modal">
        <img src="${currentItem.original}" alt="${currentItem.description}"  class="gallery__image" />
    </div>`);
 instance.show();


}
