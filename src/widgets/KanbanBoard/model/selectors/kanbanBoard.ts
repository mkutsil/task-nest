import type { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

const selectTasks = (state: StateSchema) => state.kanbanBoard.tasks;

export const getTodoKanbanTasks = createSelector([selectTasks], tasks =>
    tasks.filter(task => task.status === 'todo')
);

export const getInProgressKanbanTasks = createSelector([selectTasks], tasks =>
    tasks.filter(task => task.status === 'in-progress')
);

export const getDoneKanbanTasks = createSelector([selectTasks], tasks =>
    tasks.filter(task => task.status === 'done')
);

export const getIsTasks = (state: StateSchema) => state.kanbanBoard?.tasks.length > 0;
