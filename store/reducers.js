export default function createReducers() {
  return {
    addItem: (payload, state) => {
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    },
    removeItem: (payload, state) => {
      console.log("---state.todo", state.todo);
      console.log("---payload", payload);

      return {
        ...state,
        todo: state.todo.filter((el, idx) => idx !== payload.id),
      };
    },
  };
}
