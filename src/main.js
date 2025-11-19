// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.js-search-photo');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 1000,
});
//!================================================

form.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();
  showLoader();
  const formData = new FormData(form);
  const input = formData.get('query');

  getImagesByQuery(input)
    .then(response => {
      if (response.totalHits === 0) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createGallery(response.hits);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong',
      });
    })
    .finally(hideLoader);
  form.reset();
});

//!================================================
hideLoader();
