import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs ={
    gallery: document.querySelector('.gallery')
}
refs.gallery.addEventListener('click', onGalleryClick)

let instance = 0

refs.gallery.innerHTML = createGalleryItemsMarkup()

function createGalleryItemsMarkup() {
    return galleryItems.map(item => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="#${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
    }).join('')
}

function onGalleryClick(e) {
    if (e.target.nodeName !== 'IMG') {
        return
    }
    e.target.src = e.target.dataset.source
    
    document.addEventListener('keydown', onEscPress)
    instance = basicLightbox.create(`
        <div class="modal">
            <img width="800" height="600" src= ${e.target.src} alt=${e.target.alt}>
        </div>
        `)
    return instance.show();
}
function onEscPress(e) {
    if (e.code === 'Escape') {
        instance.close()
    }
    document.removeEventListener('keydown', onEscPress)
}