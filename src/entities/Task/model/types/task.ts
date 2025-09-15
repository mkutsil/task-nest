export interface Task {
    id: string;
    title: string;
    description?: string;
    // status: 'todo' | 'in-progress' | 'done';
    status: string;
    createdAt: string;
    updatedAt: string;
}
