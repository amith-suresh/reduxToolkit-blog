import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../Features/Blogslice';

const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
});

export default store;
