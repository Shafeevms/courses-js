import { render, itemsToRender } from './components';
import { Article } from './components/article';
import { getCardsList } from './api';
import './css/index.scss';
import { store } from './store';
import { filterArray } from './fliter';

const domContentLoaded = async() => {
  await getCardsList();
  render('.js-cardlist', itemsToRender(store.data, Article));
  store.listeners.DomContentLoaded = domContentLoaded;
};

const currencyHandler = (e) => {
  store[e.target.dataset.id] = e.target.value;
  render('.js-cardlist', itemsToRender(filterArray() || store.data, Article));
};

const selectHandler = (e) => {
  store[e.target.dataset.id] = e.target.value;
  render('.js-cardlist', itemsToRender(filterArray(), Article));
};

const clickHandler = (e) => {
  e.preventDefault();
  const parent = e.target.closest('.navigation');
  store.search = parent.querySelector('.js-input').value;
  render('.js-cardlist', itemsToRender(filterArray(), Article));
  store.search = '';
  parent.querySelector('.js-input').value = '';
};

document.addEventListener('DOMContentLoaded', domContentLoaded);
document.querySelector('.js-currency').addEventListener('change', currencyHandler);
document.querySelectorAll('.js-selector').forEach(el => el.addEventListener('change', selectHandler));
document.querySelector('.js-btn').addEventListener('click', clickHandler);
