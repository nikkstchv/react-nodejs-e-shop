export const addToCart = obj => ({
  type: 'ADD_TO_CART',
  payload: obj,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});
// Actions - это простой объект. Обязательное поле - type. 
// Все данные, которые передаются вместе с действием, кладут внутрь свойства payload.