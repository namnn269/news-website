'use strict';

import { render } from './news.js';

const inputSearch = document.getElementById('input-query');
const btnSearch = document.getElementById('btn-submit');

const newsContainer = document.getElementById('news-container-ser');
const btnNextPage = document.getElementById('btn-next-ser');
const btnPreviousPage = document.getElementById('btn-prev-ser');
const pageNum = document.getElementById('page-num-ser');
// const currentUser = getCurrentUser('currentUser');

btnSearch.addEventListener('click', function () {
  const searchKey = inputSearch.value;
  if (searchKey === '') {
    alert('Search input is empty!!');
    return;
  }
  render(searchKey, newsContainer, btnNextPage, btnPreviousPage, pageNum);
});
