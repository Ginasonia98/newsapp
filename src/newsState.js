import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice ({
  name : 'news',
  initialState : {
    news:[],
    isLoading: false
  },
  reducers: { 
    getNewsFetch : (state) => {
      state.isLoading = true;
    },
    getNewsSuccess: (state, action) => {
      state.news = action.payload;
      state.isLoading = false;
    },
    getNewsFailure : (state) => {
      state.isLoading = false;
    }
  }
});

export const {getNewsFetch,getNewsSuccess,getNewsFailure}=newsSlice.actions;
export default newsSlice.reducer;