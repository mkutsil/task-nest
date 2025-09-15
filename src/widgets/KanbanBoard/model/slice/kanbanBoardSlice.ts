import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { KanbanBoardSchema } from '../types/kanbanBoard';
import { Task } from '@/entities/Task';

const initialState: KanbanBoardSchema = {
    todo: [],
    inProgress: [],
    done: [],
};

export const kanbanBoardSlice = createSlice({
    name: 'kanbanBoard',
    initialState,
    reducers: {
        setTodoTasks: (state, action: PayloadAction<Task[]>) => {
            state.todo = [...state.todo, ...action.payload];
        },
        setInProgressTasks: (state, action: PayloadAction<Task[]>) => {
            state.inProgress = action.payload;
        },
        setDoneTasks: (state, action: PayloadAction<Task[]>) => {
            state.done = action.payload;
        },
    },
});

export const { actions: kanbanBoardActions } = kanbanBoardSlice;
export const { reducer: kanbanBoardReducer } = kanbanBoardSlice;
