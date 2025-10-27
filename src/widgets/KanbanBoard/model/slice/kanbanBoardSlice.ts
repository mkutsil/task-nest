import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { KanbanBoardSchema } from '../types/kanbanBoard';
import { Task } from '@/entities/Task';

const initialState: KanbanBoardSchema = {
    tasks: [],
};

// TODO: Fix editTask reducer logic
export const kanbanBoardSlice = createSlice({
    name: 'kanbanBoard',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks = [...state.tasks, action.payload];
        },

        editTask: (state, action: PayloadAction<Task>) => {
            state.tasks = [
                ...state.tasks.filter(task => task.id === action.payload.id),
                action.payload,
            ];
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const { actions: kanbanBoardActions } = kanbanBoardSlice;
export const { reducer: kanbanBoardReducer } = kanbanBoardSlice;
