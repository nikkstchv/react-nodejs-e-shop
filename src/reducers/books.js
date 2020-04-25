const initialState = {
  isReady: false,
  items: null,
}

// В аргументах у функции page указан второй аргумент - action. 
// Это стандартные аргументы redux reducer'а. 
// Благодаря этому, мы можем легко обрабатывать различные действия по их типу, 
// попадая в нужную секцию case оператора switch.
// Так же обратите внимание, что мы не изменили объект state, 
// а вернули новый с полем year равным action.payload (а значит книгой, выбранной пользователем).

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        items: action.payload,
        isReady: true,
      };
    case 'SET_IS_READY':
      return {
        ...state,
        isReady: action.payload,
      }
    default:
    return state;
  }
};
