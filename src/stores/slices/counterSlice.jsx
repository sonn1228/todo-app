// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getPost } from '../middlewares/postMiddleware';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        postList: [],
        status: 'idle'
    },
    reducers: {
        // actions
        // dispatch(increment(5))
        // payload = action.payload = 5
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    // call api
    extraReducers: (builder) => {
        builder.addCase(getPost.fulfilled, (state, action) => {
            state.status = 'success'
            state.postList = action.payload
        });
        builder.addCase(getPost.pending, (state, action) => {
            state.status = 'pending'
        });
        builder.addCase(getPost.rejected, (state, action) => {
            state.status = 'error'
        });
    }
});
// import counterSlice from '../../stores/slices/counterSlice';

// const { increment, decrement } = counterSlice.actions;

export default counterSlice;