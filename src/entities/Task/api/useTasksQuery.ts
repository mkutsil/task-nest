import { useQuery } from '@tanstack/react-query';
import { getTasks } from './getTasks';

export const useTasksQuery = () =>
    useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
        staleTime: 1000 * 60, // 1 хв — кеш оновлюється не частіше ніж раз на хвилину
    });
