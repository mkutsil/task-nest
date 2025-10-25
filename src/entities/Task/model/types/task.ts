export interface Task {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    // status: 'todo' | 'in-progress' | 'done';
    status: string;
    createdAt: string;
    updatedAt: string;
}

export enum TaskStatusEnum {
    TODO = 'todo',
    IN_PROGRESS = 'in-progress',
    DONE = 'done',
}
