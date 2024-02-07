import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from "./common/Pagination/paginationSlice"

export default configureStore({
    reducer: {
        pagination: paginationReducer,
    },
});