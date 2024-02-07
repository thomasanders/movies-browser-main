import { createSlice } from "@reduxjs/toolkit";
import { getPageFromURL } from "./getPageFromURL";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: getPageFromURL(),
        currentPage: getPageFromURL(),
        totalPages: 1,
    },
    reducers: {
        incrementPage: state => {
            state.page += 1;
            state.currentPage = state.page;
        },
        decrementPage: state => {
            state.page -= 1;
            state.currentPage = state.page;
        },
        goToTheFirstPage: state => {
            state.page = 1
            state.currentPage = state.page;
        },
        goToTheLastPage: (state, action) => {
            state.page = action.payload;
            state.currentPage = state.page;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.page = action.payload;
            state.currentPage = state.page;
        },
    },
});

export const {
    incrementPage,
    decrementPage,
    goToTheFirstPage,
    goToTheLastPage,
    setTotalPages,
    setCurrentPage,
} = paginationSlice.actions;

export const selectPaginationState = state => state.pagination;
export const selectPage = state => selectPaginationState(state).page;

export default paginationSlice.reducer;