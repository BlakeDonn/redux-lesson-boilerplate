export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), todo: action.todo, completed: false },
      ];
    case "COMPLETE_TASK":
      state.splice(state.findIndex(state =>state.id === action.id), 1)
      return [
        ...state,
        { id: action.id, todo: action.todo, completed: true },
      ];
    default:
      return state;
  }
};
