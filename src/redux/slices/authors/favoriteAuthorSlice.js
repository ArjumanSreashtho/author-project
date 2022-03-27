import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authorService from '../../../services/authorService';

const initialState = {
  favoriteAuthors: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  responseMessage: ''
};

// Get all favorite authors
export const getFavoriteAuthors = createAsyncThunk('authors/getfavoriteAuthors', async (filters, thunkAPI) => {
  try {
    const result = await authorService.getFavoriteAuthors(filters);
    return result;
  }
  catch (error) {
    const responseMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(responseMessage);
  }
})

// Add favorite author
export const addFavoriteAuthor = createAsyncThunk('authors/addFavoriteAuthor', async (author, thunkAPI) => {
  try {
    const result = await authorService.addFavoriteAuthor(author);
    return result;
  }
  catch (error) {
    const responseMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(responseMessage);
  }
})

// Remove favorite author
export const removeFavoriteAuthor = createAsyncThunk('authors/removeFavoriteAuthor', async (author, thunkAPI) => {
  try {
    const result = await authorService.removeFavoriteAuthor(author);
    return result;
  }
  catch (error) {
    const responseMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(responseMessage);
  }
})


export const favoriteAuthorsSlice = createSlice({
  name: "favoriteAuthors",
  initialState,
  reducers: {
    reset: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(addFavoriteAuthor.pending, (state) => {
          state.isLoading = true;
          state.responseMessage = '';
        })
        .addCase(addFavoriteAuthor.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.responseMessage = action.payload
        })
        .addCase(addFavoriteAuthor.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.responseMessage = action.payload;
        })
        .addCase(removeFavoriteAuthor.pending, (state) => {
          state.isLoading = true;
          state.responseMessage = '';
        })
        .addCase(removeFavoriteAuthor.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.responseMessage = action.payload;
        })
        .addCase(removeFavoriteAuthor.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.responseMessage = action.payload;
        })
        .addCase(getFavoriteAuthors.pending, (state) => {
          state.isLoading = true;
          state.responseMessage = '';
        })
        .addCase(getFavoriteAuthors.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.responseMessage = '';
          state.favoriteAuthors = action.payload;
        })
        .addCase(getFavoriteAuthors.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.responseMessage = action.payload;
        })
  }
});

export const { reset } = favoriteAuthorsSlice.actions;
export default favoriteAuthorsSlice.reducer;