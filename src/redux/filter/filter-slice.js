import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterSet: (_, { payload }) => payload,
  },
});

export const { filterSet } = filterSlice.actions;

export default filterSlice.reducer;
