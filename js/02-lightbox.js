import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs ={
    gallery: document.querySelector('.gallery')
}

refs.gallery.innerHTML = createGalleryItemsMarkup()

function createGalleryItemsMarkup() {
    return galleryItems.map(item => {
        return `<li><a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
        </a></li>`
    }).join('')
    
}
const gallery = new SimpleLightbox('.gallery a' ,{captionsData: 'alt', captionDelay: 250});