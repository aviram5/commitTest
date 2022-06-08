import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {FakeServerRequest} from '../../api/FakeServer';

export const fetchData = createAsyncThunk(
  'form/fetchData',
  async ({formData}, {rejectWithValue}) => {
    return FakeServerRequest(formData)
      .then(data => data)
      .catch(err => rejectWithValue(err));
  },
);

const initialState = {
  formData: {},
  error: '',
  succsess: '',
  isLoading: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetMessage: state => {
      state.error = '';
      state.succsess = '';
    },
  },
  extraReducers: {
    [fetchData.pending]: state => {
      state.isLoading = true;
    },
    [fetchData.rejected]: (state, {payload}) => {
      state.formData = {};
      state.error = payload;
      state.isLoading = false;
      state.succsess = '';
    },
    [fetchData.fulfilled]: (state, {payload}) => {
      state.formData = payload;
      state.isLoading = false;
      state.error = '';
      state.succsess = 'Data successfully saved';
    },
  },
});

export const {resetMessage} = formSlice.actions;
export default formSlice.reducer;
