'use strict';

import imgGalleries from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');
const modalBox = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');
const modalClouse = document.querySelector('.lightbox__button');


imgGalleries.map(imgGallery => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    li.classList.add('gallery__item');

    a.classList.add('gallery__link');
    a.href = imgGallery.original;

    img.classList.add('gallery__image');
    img.src = imgGallery.preview;
    img.setAttribute("data-sourse", imgGallery.original);
    img.alt = imgGallery.description;

    galleryList.append(li);
    li.append(a);
    a.append(img);
});

galleryList.addEventListener('click', (e)=>{
e.preventDefault();
let modalLink = e.target.dataset.sourse;

modalBox.classList.add('is-open');

modalImg.src = modalLink;
})
modalClouse.addEventListener('click',() =>{
    modalBox.classList.remove('is-open');
    modalImg.src = '';
})