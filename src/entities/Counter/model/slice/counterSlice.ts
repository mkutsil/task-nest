import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counter';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter: state => {
            state.value = state.value + 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
