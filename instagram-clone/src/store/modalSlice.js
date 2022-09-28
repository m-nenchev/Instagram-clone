import { createSlice } from "@reduxjs/toolkit";

export const getIsVisible = (state) => state.modal.isVisible;
export const getModalType = (state) => state.modal.modalType;
export const getModalData = (state) => state.modal.modalData;

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isVisible: false,
        modalType: "",
        modalData: {},
    },
    reducers: {
        show: (state, action) => {
            const { payload } = action;
            console.log(payload);
            state.isVisible = true;
            state.modalType = payload.type;
            state.modalData = payload.data;
        },
        hide: (state) => {
            state.isVisible = false;
        },
    },
});

export const { show, hide } = modalSlice.actions;

export default modalSlice.reducer;
