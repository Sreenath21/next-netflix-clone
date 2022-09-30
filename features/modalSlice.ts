import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Istate {
  modal: boolean;
}

const initialState: Istate = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
});

export const { setShowModal } = modalSlice.actions;

export default modalSlice.reducer;
