import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword } = userSlice.actions;

export default userSlice.reducer;
