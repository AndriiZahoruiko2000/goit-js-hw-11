const loader = document.querySelector('.loader');
const list = document.querySelector('.gallery');

export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}

function createTemplateImage(image) {
  return ` <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}"><img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" /></a>
      <ul class="image-params">
      <p><b>Likes:</b>${image.likes}</p>
      <p><b>Views:</b>${image.views}</p>
      <p><b>Comments:</b>${image.comments}</p>
      <p><b>Downloads:</b>${image.downloads}</p>
    </ul>
    </li>`;
}

function createTemplateImages(images) {
  return images.map(createTemplateImage).join('');
}

export function createGallery(images) {
  const markup = createTemplateImages(images);
  list.innerHTML = markup;
}
export function clearGallery() {
  list.innerHTML = '';
}
