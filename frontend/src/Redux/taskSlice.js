import { createSlice } from "@reduxjs/toolkit";

fetch("/api/v1/task")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const initialState = {
  entertainment: 10,
  Health: 10,
  Travel: 10,
  Education: 10,
};

export const taskSlice = createSlice({
  name: "task_slice",
  initialState,
  reducer: {
    addItem: (state) => (state.Education += 1),
  },
});

export const { addItem } = taskSlice.actions;
export default taskSlice.reducer;
