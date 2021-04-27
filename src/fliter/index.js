import { store } from '../store/';

export const filterArray = () => {
  const { genre, grade, search, subject, data } = store;
  let filtered = [...data];
  filtered = filtered.filter(el => el.genre.includes(genre));
  filtered = filtered.filter(el => el.grade.includes(grade));
  filtered = filtered.filter(el => el.subject.includes(subject));
  filtered = searchString(filtered, search);
  return filtered;
};


const searchString = (array, str) => array.filter(
  el => (el.genre + el.subject + el.grade).toLowerCase().includes(str.trim().toLowerCase())
);
