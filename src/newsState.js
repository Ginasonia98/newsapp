import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice ({
  name : 'news',
  initialState : {
    news:[],
    currentPage: 1,
    isLoading: false
  },
  reducers: { 
    getNewsFetch : (state) => {
      state.isLoading = true;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload
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

export const {getNewsFetch,getNewsSuccess,changeCurrentPage, getNewsFailure}=newsSlice.actions;
export default newsSlice.reducer;