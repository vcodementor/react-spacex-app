import { createSlice } from '@reduxjs/toolkit';
import { fetchLaunchList, fetchLaunchDetail } from './LaunchAction';

const initialState = {
  launchList: [],
  launchDetail: null,
  status: 'idle',
  error: null,
};

const launchSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunchList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLaunchList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.launchList = [...state.launchList, ...action.payload];
      })
      .addCase(fetchLaunchList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(fetchLaunchDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLaunchDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.launchDetail = action.payload;
      })
      .addCase(fetchLaunchDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export default launchSlice.reducer;