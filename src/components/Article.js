import { store } from '../store';

export const Article = ({ subject, grade, genre, price, priceBonus }) => (
  `
  <li class="cardlist__item article">
        <img class="article__img" src="./img/4306.png" alt="фоновое" />
        <article class="article__content">
          <h2 class="article__subj">${subject}</h2>
          <h2 class="article__grades">${gradesString(grade)}</h2>
          <h3 class="article__genre">${genre}</h3>
          <a class="article__more" href="#">Подробнее</a>
          <a class="article__try" href="#">${currencyChanger(store.currency, price, priceBonus)}</a>
        </article>
      </li>
  `
);

const gradesString = str => {
  const array = str.split(';');
  return array.length === 1
    ? `${array[0]} класс`
    : `${array[0]}-${array[array.length - 1]} классы`;
};

const currencyChanger = (value, price, priceBonus) => {
  return value === 'рубли'
  ? `${price} рублей`
  : `${priceBonus} бонусов`;
};

