const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  filterData: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filterData = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
