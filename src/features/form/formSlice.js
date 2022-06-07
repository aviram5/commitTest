import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {FakeServerRequest} from '../../api/FakeServer';

export const fetchData = createAsyncThunk(
  'form/fetchData',
  async ({formData}) => {
    try {
      return await FakeServerRequest(formData);
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  formData: {},
  error: '',
  isLoading: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: state => {
      state.isLoading = true;
    },
    [fetchData.rejected]: (state, {payload}) => {
      console.log('-fetchData-REJECTED');
      console.log('Error Payload: ', payload);
      state.error = payload;
      state.isLoading = false;
    },
    [fetchData.fulfilled]: (state, {payload}) => {
      console.log('-fetchData-fulfilled');
      console.log('fulfilled Payload: ', payload);
      state.formData = payload;
      state.isLoading = false;
    },
  },
});

export default formSlice.reducer;
