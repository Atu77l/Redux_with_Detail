// reducers/todoList.js
const initialState = {
    list: []
  };
  
  const todoList = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, list: [...state.list,action.payload] };
      default:
        return state;
    }
  };
  
  export default todoList;
  