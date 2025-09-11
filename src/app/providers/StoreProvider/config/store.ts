import { counterReducer } from '@/entities/Counter';
import { kanbanBoardReducer } from '@/widgets/KanbanBoard';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        kanbanBoard: kanbanBoardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
