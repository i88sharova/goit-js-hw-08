const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
// const galleryContainer = document.querySelector('.gallery');

// const createGalleryItem = ({ preview, original, description }) => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('gallery-item');
//   const link = document.createElement('a');
//   link.classList.add('gallery-link');
//   link.href = original;
//   const image = document.createElement('img');
//   image.classList.add('gallery-image');
//   image.src = preview;
//   image.dataset.source = original;
//   image.alt = description;
//   link.appendChild(image);
//   listItem.appendChild(link);
//   return listItem;
// };

// const appendGalleryItems = (container, items) => {
//   const galleryItems = items.map(createGalleryItem);
//   container.append(...galleryItems);
// };

// appendGalleryItems(galleryContainer, images);
// galleryContainer.addEventListener('click', onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();
//   const target = event.target;
//   if (target.classList.contains('gallery-image')) {
//     const largeImageSource = target.dataset.source;
//     openModal(largeImageSource);
//   }
// }

// let state; 

// function openModal(imageSource) {
//   const modalImage = `
//     <div class="modal">
//       <img src="${imageSource}" width="800" height="600" alt="Large Image">
//     </div>
//   `;

//   state = basicLightbox.create(modalImage, {
//     onShow: (modalstate) => {
//       window.addEventListener('keydown', onEscKeyPress);
//     },
//     onClose: (modalstate) => {
//       window.removeEventListener('keydown', onEscKeyPress);
//     },
//   });

//   state.show();
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     state.close();
//   }
// }
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images.reduce((item, image) => item +=
`<li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
      <img
        class="gallery-image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>
`, '');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const largeImageSource = target.dataset.source;
  openModal(largeImageSource);
}

function openModal(imageSource) {
  const modalImage = `
    <div class="modal">
      <img src="${imageSource}" width="1000" alt="Large Image">
    </div>
  `;

  const state = basicLightbox.create(modalImage, {
    onShow: (modalState) => {
      window.addEventListener('keydown', (event) => onEscKeyPress(event, modalState));
    },
    onClose: (modalState) => {
      window.removeEventListener('keydown', (event) => onEscKeyPress(event, modalState));
    },
  });

  state.show();
}

function onEscKeyPress(event, modalState) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    modalState.close();
  }
}