import type { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getTodoKanbanTasks = (state: StateSchema) => state.kanbanBoard?.todo || [];
export const getInProgressKanbanTasks = (state: StateSchema) => state.kanbanBoard?.inProgress || [];
export const getDoneKanbanTasks = (state: StateSchema) => state.kanbanBoard?.done || [];
