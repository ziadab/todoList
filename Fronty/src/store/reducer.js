import * as actions from "./actions";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TO_DO:
      return {
        ...state,
        todos: action.data.data
      };

    case actions.DELETE_TO_DO:
      const newToDo = state.todos.filter(el => {
        return el.id !== action.id;
      });
      return { todos: newToDo };

    default:
      return state;
  }
};
