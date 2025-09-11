import { Task } from '@/entities/Task';

export interface KanbanBoardSchema {
    todo: Task[];
    inProgress: Task[];
    done: Task[];
}
