import { useQueryClient } from '@tanstack/react-query';
import { Task } from '../model/types/task';

export const useTaskById = (taskId: string) => {
    const queryClient = useQueryClient();

    const tasks = queryClient.getQueryData<Task[]>(['tasks']);
    return tasks?.find(t => t.id === taskId);
};
