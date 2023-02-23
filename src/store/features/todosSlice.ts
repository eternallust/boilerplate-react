import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listTodo: [] as string[],
};

const persistSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.listTodo = [...state.listTodo, actions.payload];
    },
    deleteTodo: (state, actions) => {
      state.listTodo = state.listTodo.filter((e) => e !== actions.payload);
    },
  },
});

export const { addTodo, deleteTodo } = persistSlice.actions;
export default persistSlice.reducer;
