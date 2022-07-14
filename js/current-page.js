const currentPageUrl = '/index.html';

const linkEl = document.querySelector(`.header__item-link[href="${currentPageUrl}"]`);

linkEl.classList.add('header__item-link--current');
