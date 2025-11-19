import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { Task } from '../model/types/task';

export const useTasksRealtime = () => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => [],
        enabled: false, // ми не фетчимо вручну — Firestore сам пушить
    });

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'tasks'), snapshot => {
            const tasks: Task[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Task[];

            queryClient.setQueryData(['tasks'], tasks);
        });

        return () => unsub();
    }, [queryClient]);

    return query;
};
