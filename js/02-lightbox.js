import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const listEl = document.querySelector(".gallery");


const markup = galleryItems.map(({preview, description, original}) => `<li class="gallery__item"> <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
<img src="${preview}" alt="${description}" class="gallery__image"/>  
  </a>
</li>`).join("");


listEl.insertAdjacentHTML("beforeend", markup);

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// Do something…
// });

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: '250', captionsData: 'alt' });




