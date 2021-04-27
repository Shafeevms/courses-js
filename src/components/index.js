export const render = (selector, component) => document.querySelector(`${selector}`).innerHTML = component;

export const itemsToRender = (array, component) => {
  return array.reduce((acc, item) => {
    return acc += component(item);
  }, '');
};
