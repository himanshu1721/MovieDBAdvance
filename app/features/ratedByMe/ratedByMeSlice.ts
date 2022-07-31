import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  myRatingData = [],
  error: false
}

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    getMyRatings: (state, action) => {

    }
  },
  extraReducers
})
