import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authorService from './authorService';

const initialState = {
  authors: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  responseMessage: ''
};

// Get all authors
export const getAuthors = createAsyncThunk('authors/getAll', async (filters, thunkAPI) => {
  try {
    const result = await authorService.getAuthors(filters);
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

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
        .addCase(getAuthors.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getAuthors.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.authors = action.payload;
        })
        .addCase(getAuthors.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.responseMessage = action.payload;
        })
  }
});

export const { reset } = authorsSlice.actions;
export default authorsSlice.reducer;