import { CounterSchema } from '@/entities/Counter';
import { KanbanBoardSchema } from '@/widgets/KanbanBoard';

export interface StateSchema {
    counter: CounterSchema;
    kanbanBoard: KanbanBoardSchema;
}
