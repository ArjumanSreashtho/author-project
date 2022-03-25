import { configureStore } from '@reduxjs/toolkit';
import authorsReducer from './slices/authors/authorsSlice';
import favoriteAuthorsReducer from './slices/authors/favoriteAuthorSlice';

const store = configureStore({
  reducer: {
    authors: authorsReducer,
    favoriteAuthors: favoriteAuthorsReducer
  }
});

export default store;