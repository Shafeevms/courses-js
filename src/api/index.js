import { store } from '../store';

const URL = 'https://krapipl.imumk.ru:8443/api/mobilev1/update';

export const getCardsList = async() => {
  const resp = await fetch(URL, {
    method: 'POST'
  });
  const { items } = await resp.json();
  store.data = [...items];
};
